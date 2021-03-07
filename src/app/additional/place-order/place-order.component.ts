import { Component, OnInit } from '@angular/core';
import { Shipments } from 'src/app/_model/shipments';
import { OrderService } from 'src/app/_services/order.service';
import { ProductService } from 'src/app/_services/product.service';
import { ShipmentsService } from 'src/app/_services/shipments.service';

declare var paypal;

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css'],
})
export class PlaceOrderComponent implements OnInit {
  totalToPay = 0;
  paidFor = false;
  orderID: string = '';
  constructor(
    private orderService: OrderService,
    private productService: ProductService,
    private shipmentsService: ShipmentsService
  ) {}

  ngOnInit(): void {
    const placedOrder = { ...this.orderService.placedOrder };
   
    this.totalToPay = placedOrder['totalAmount'];

    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                reference_id: 'ITI',
                description: 'ITI Amazon',

                amount: {
                  currency_code: 'USD',
                  value: placedOrder['totalAmount'],
                  breakdown: {
                    item_total: {
                      currency_code: 'USD',
                      value: placedOrder['totalPrice'],
                    },
                    shipping: {
                      currency_code: 'USD',
                      value: placedOrder['shipping'],
                    },
                    handling: {
                      currency_code: 'USD',
                      value: placedOrder['handling'],
                    },
                    tax_total: {
                      currency_code: 'USD',
                      value: placedOrder['tax'],
                    },
                  },
                },
                items: [...placedOrder['order']],
              },
            ],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then((details) => {
           
            this.paidFor = true;
            this.orderID = data.orderID;
            this.productService.addProductsToCart([]);

            const orderFullDetails = {
              orderData: data,
              orderDetails: details,
              shipping: placedOrder['shipping'],
              handling: placedOrder['handling'],
              tax: placedOrder['tax'],
              userAddress: placedOrder['userAddress'],
              userID: placedOrder['userID'],
            };
            
            this.orderService.addOrder(orderFullDetails);

            const shippingDate = new Date();
            shippingDate.setDate(shippingDate.getDate() + 7);

            const shippingDetails: Shipments = {
              userID: placedOrder['userID'],
              ordersID: data.orderID,
              deliveryFees: placedOrder['shipping'] + placedOrder['handling'],
              totalPrice: placedOrder['totalAmount'],
              shipmentAddress: placedOrder['userAddress'],
              deliveryDate: shippingDate
                .toUTCString()
                .split(' ')
                .slice(0, 4)
                .join(' '),
              paymentMethod: 'Paypal',
              shippingCompany: 'DHL',
            };
            
            this.shipmentsService.addShipment(shippingDetails);
          });
        },
      })
      .render('#paypal');
  }
}
