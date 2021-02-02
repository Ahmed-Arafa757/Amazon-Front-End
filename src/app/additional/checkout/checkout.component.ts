import { Component, OnInit, OnChanges } from '@angular/core';
import { PaymentMethod } from 'src/app/_model/payment-methods';
import { Users } from 'src/app/_model/users';
import { PaymentMethodsService } from 'src/app/_services/payment-methods.service';
import { UsersService } from 'src/app/_services/users.service';

@Component({
  selector: 'app-cart',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  user: Users;

  paymentMethods: PaymentMethod[] = [];

  addPaymentMethod: PaymentMethod = {
    userID: 'nan2_7127_5562',
  };

  constructor(
    private paymentMethodService: PaymentMethodsService,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.user = this.usersService.getUserById('wzpd_8443_8036');

    this.paymentMethods = this.paymentMethodService.getPaymentMethodByUserId(
      'nan2_7127_5562'
    );
  }

  ngOnChanges() {
    // if (this.addPaymentMethod.paymentMethod === 'Paypal'  || this.addPaymentMethod.paymentMethod==="Cash on Delivery") {
    //   this.addPaymentMethod.cardOwnerName = null;
    //   this.addPaymentMethod.cardEndingNum = null;
    //   this.addPaymentMethod.cardExpires = null;
    // }
    // if (this.addPaymentMethod.paymentMethod === 'Debit Card'  || this.addPaymentMethod.paymentMethod==="Credit Card") {
    //   this.addPaymentMethod.paypalAccountName = null;
    // }
  }

  onAddPaymentMethod() {
    if (
      this.addPaymentMethod.paymentMethod === 'Paypal' ||
      this.addPaymentMethod.paymentMethod === 'Cash on Delivery'
    ) {
      this.addPaymentMethod.cardCompany = null;
      this.addPaymentMethod.cardOwnerName = null;
      this.addPaymentMethod.cardEndingNum = null;
      this.addPaymentMethod.cardExpires = null;
    }

    if (
      this.addPaymentMethod.paymentMethod === 'Debit Card' ||
      this.addPaymentMethod.paymentMethod === 'Credit Card' ||
      this.addPaymentMethod.paymentMethod === 'Cash on Delivery'
    ) {
      this.addPaymentMethod.paypalAccountName = null;
    }

    this.paymentMethodService.addPaymentMethod(this.addPaymentMethod);
    this.paymentMethods = this.paymentMethodService.getPaymentMethodByUserId(
      'nan2_7127_5562'
    );

    // this.addReview.fullReview = '';
    // this.addReview.reviewSummary = '';
    // this.hasBeenSubmitted = true;
  }
}
