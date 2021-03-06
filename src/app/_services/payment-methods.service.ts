import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { PaymentMethods } from '../_model/payment-methods';

@Injectable({ providedIn: 'root' })
export class PaymentMethodsService {
  paymentMethods: PaymentMethods[] = [];
  latestPaymentMethods = new EventEmitter<PaymentMethods[]>();

  constructor(private http: HttpClient) {}

  getAllPaymentMethods() {
    this.http
      .get<{ paymentMethods: PaymentMethods[] }>(
        `https://iti-amzon-backend.herokuapp.com/api/payment-methods`
      )
      .subscribe(
        (paymentMethodsData) => {
          this.paymentMethods = paymentMethodsData.paymentMethods;
          this.latestPaymentMethods.emit(this.paymentMethods);
        },
        (err) => {
          console.log(err);
        },
        () => {}
      );
  }
}
