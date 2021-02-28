import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/_services/order.service';
import { ProductService } from 'src/app/_services/product.service';

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
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const placedOrder = { ...this.orderService.placedOrder };
    console.log(placedOrder);
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
            console.log(details);
            console.log(data);
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
            console.log(orderFullDetails);
            this.orderService.addOrder(orderFullDetails);
          });
        },
      })
      .render('#paypal');
  }
}
