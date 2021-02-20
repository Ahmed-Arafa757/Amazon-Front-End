import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/_services/order.service';
import { UserPaymentMethodsService } from 'src/app/_services/user-payment-methods.service';

declare var paypal;

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css'],
})
export class PlaceOrderComponent implements OnInit {
  totalToPay = 0;
  paidFor = false;
  // userAddress = [];
  orderID: string = '';
  constructor(
    private userPaymentMethodsService: UserPaymentMethodsService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    const placedOrder = { ...this.userPaymentMethodsService.placedOrder };
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
            const orderFullDetails = {
              orderData: data,
              orderDetails: details,
              userAddress: placedOrder['userAddress'],
            };
            console.log(orderFullDetails);
            this.orderService.addOrder(orderFullDetails);
          });
        },
      })
      .render('#paypal');
  }
}
