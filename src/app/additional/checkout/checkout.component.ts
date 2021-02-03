import { Component, OnInit, OnChanges } from '@angular/core';
import { Address } from 'src/app/_model/address';
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

  addresses: Address[] = [];
  addNewUserAddress: Address = {};

  paymentMethods: PaymentMethod[] = [];
  addPaymentMethod: PaymentMethod = {
    userID: 'nan2_7127_5562',
  };

  constructor(
    private paymentMethodService: PaymentMethodsService,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.user = this.usersService.getUserById('5ff8c51fa4c6cf417005fd5e');
    this.addresses = this.user.address.slice();

    this.paymentMethods = this.paymentMethodService.getPaymentMethodByUserId(
      'nan2_7127_5562'
    );
  }

  onAddUserAddress() {
    let newAddress = Object.assign({}, this.addNewUserAddress);
    this.addresses.push(newAddress);
    this.user.address = this.addresses.slice();

    this.usersService.updateUser(this.user);
    this.user = this.usersService.getUserById('5ff8c51fa4c6cf417005fd5e');

    this.addresses = this.user.address.slice();

    this.addNewUserAddress.country = null;
    this.addNewUserAddress.city = null;
    this.addNewUserAddress.state = null;
    this.addNewUserAddress.street = null;
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
  }
}
