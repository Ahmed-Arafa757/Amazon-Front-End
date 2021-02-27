import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/_model/address';
import { PaymentMethods } from 'src/app/_model/payment-methods';
import { User } from 'src/app/_model/users';
import { ProductService } from 'src/app/_services/product.service';
import { UsersService } from 'src/app/_services/users.service';
import { NgForm } from '@angular/forms';
import { OrderService } from 'src/app/_services/order.service';
import { PaymentMethodsService } from 'src/app/_services/payment-methods.service';

@Component({
  selector: 'app-cart',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  cartArray = [];
  totalQuantity = 0;
  total_amount: number = 0.0;
  totalPrice: number = 0.0;
  shipping: number = 10.0;
  handling: number = 10.0;
  tax_total: number = 0.0;
  buy = [];
  user: User;
  addresses: Address[] = [];
  addNewUserAddress: Address = {};
  selectedAddress: Address = {};
  isSelectedAddress: boolean = false;
  addNewShipping: boolean = false;
  paymentMethods: PaymentMethods[] = [];

  constructor(
    private orderService: OrderService,
    private usersService: UsersService,
    private productService: ProductService,
    private paymentMethodsService: PaymentMethodsService
  ) {}

  ngOnInit(): void {
    this.user = JSON.parse(
      JSON.stringify(this.usersService.getUserById('5ff8c51fa4c6cf417005fd5e'))
    );
    this.addresses = this.user.address;
    console.log(this.user);

    this.cartArray = this.productService.cartProducts;
    this.updateQuantityPrice();
    console.log(this.cartArray);

    this.paymentMethodsService.getAllPaymentMethods();
    this.paymentMethodsService.latestPaymentMethods.subscribe(
      (res) => {
        this.paymentMethods = res;
        console.log(this.paymentMethods);
      },
      (err) => {
        console.log(err);
      },
      () => {}
    );
  }

  updateQuantityPrice() {
    this.orderService.placedOrder = {};
    this.buy = [];
    this.totalQuantity = 0;
    this.totalPrice = 0;
    for (let index = 0; index < this.cartArray.length; index++) {
      this.totalQuantity += this.cartArray[index].quantity;
      this.totalPrice +=
        this.cartArray[index].quantity *
        this.cartArray[index].productPrice.finalPrice;
    }
    this.productService.addProductsToCart(this.cartArray);

    this.tax_total = (this.totalPrice / 100) * 14;
    this.total_amount =
      this.totalPrice + this.shipping + this.handling + this.tax_total;

    for (let index = 0; index < this.cartArray.length; index++) {
      this.buy.push({
        name: `${this.cartArray[index].productName}`,
        description: `${this.cartArray[index].productName}`,
        sku: `sku0${index + 1}`,
        unit_amount: {
          currency_code: 'USD',
          value: `${this.cartArray[index].productPrice.finalPrice}`,
        },

        quantity: `${this.cartArray[index].quantity}`,
      });
    }

    this.onConfirm();
  }

  onAddUserAddress(addressForm: NgForm) {
    let newAddress = Object.assign({}, this.addNewUserAddress);
    this.addresses.push(newAddress);
    this.user.address = this.addresses;

    this.usersService.updateUser(this.user);
    this.user = JSON.parse(
      JSON.stringify(this.usersService.getUserById('5ff8c51fa4c6cf417005fd5e'))
    );
    this.addresses = this.user.address;

    addressForm.reset();
  }

  deleteItem(item) {
    const index = this.cartArray.indexOf(item);
    this.cartArray.splice(index, 1);
    this.updateQuantityPrice();
  }

  onCheckAddress() {
    this.isSelectedAddress = true;
    console.log(this.selectedAddress);
  }

  onAddNewAddress() {
    this.addNewShipping = !this.addNewShipping;
  }

  onConfirm() {
    this.orderService.placedOrder = {
      order: this.buy,
      totalAmount: this.total_amount,
      totalPrice: this.totalPrice,
      shipping: this.shipping,
      handling: this.handling,
      tax: this.tax_total,
      userID: this.user.userID,
      userAddress: this.selectedAddress,
    };
  }
}
