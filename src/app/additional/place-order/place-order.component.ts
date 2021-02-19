import { Component, OnInit } from '@angular/core';
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

  constructor(private userPaymentMethodsService: UserPaymentMethodsService) {}

  ngOnInit(): void {
    const placedOrder = { ...this.userPaymentMethodsService.placedOrder };

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
                shipping: {
                  method: 'United States Postal Service',
                  address: {
                    name: {
                      full_name: 'John',
                      surname: 'Doe',
                    },
                    address_line_1: '123 Townsend St',
                    address_line_2: 'Floor 6',
                    admin_area_2: 'San Francisco',
                    admin_area_1: 'CA',
                    postal_code: '94107',
                    country_code: 'US',
                  },
                },
              },
            ],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then((details) => {
            console.log(
              'Transaction completed by ' + details.payer.name.given_name
            );
            console.log(details);
            console.log(data);
            this.paidFor = true;

            // Call your server to save the transaction
            return fetch('/api/paypal-transaction-complete', {
              method: 'post',
              headers: {
                'content-type': 'application/json',
              },
              body: JSON.stringify({
                orderID: data.orderID,
              }),
            });
          });
        },
      })
      .render('#paypal');
  }
}
