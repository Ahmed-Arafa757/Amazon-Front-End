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
  user: User = { email: '', password: '' };
  addresses: Address[] = [];
  addNewUserAddress: Address = {};
  selectedAddress: Address = {};
  isSelectedAddress: boolean = false;
  addNewShipping: boolean = false;
  paymentMethods: PaymentMethods[] = [];
  shippingDate: string = '';

  constructor(
    private orderService: OrderService,
    private usersService: UsersService,
    private productService: ProductService,
    private paymentMethodsService: PaymentMethodsService
  ) {}

  ngOnInit(): void {
    const userID = localStorage.getItem('user id');
    this.usersService.getUserById(userID).subscribe({
      next: (user: any) => {
        this.user = user;
       
        this.addresses = JSON.parse(JSON.stringify(this.user.address));
      
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.cartArray = this.productService.cartProducts;
    this.updateQuantityPrice();
   

    this.paymentMethodsService.getAllPaymentMethods();
    this.paymentMethodsService.latestPaymentMethods.subscribe(
      (res) => {
        this.paymentMethods = res;
       
      },
      (err) => {
        console.log(err);
      },
      () => {}
    );

    const shippingDate = new Date();
    shippingDate.setDate(shippingDate.getDate() + 7);
    this.shippingDate = shippingDate
      .toUTCString()
      .split(' ')
      .slice(0, 4)
      .join(' ');
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
        tax: {
          currency_code: 'USD',
          value: `${
            (this.cartArray[index].productPrice.finalPrice / 100) * 14
          }`,
        },
      });
    }

    this.onConfirm();
  }

  onAddUserAddress(addressForm: NgForm) {
    let newAddress = Object.assign({}, this.addNewUserAddress);
    this.addresses.push(newAddress);
    this.user.address.push(newAddress);
    this.usersService.updateUser(this.user).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });

    // this.usersService.updateUser(this.user);
    // this.user = JSON.parse(
    //   JSON.stringify(this.usersService.getUserById('5ff8c51fa4c6cf417005fd48'))
    // );
    // this.addresses = this.user.address;

    addressForm.reset();
  }

  deleteItem(item) {
    const index = this.cartArray.indexOf(item);
    this.cartArray.splice(index, 1);
    this.updateQuantityPrice();
  }

  onCheckAddress() {
    this.isSelectedAddress = true;
   
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
      userID: this.user._id,
      userAddress: this.selectedAddress,
    };
  }

  onRemoveAddress(address) {
    if (address === this.selectedAddress) {
      this.isSelectedAddress = false;
    }
    const filteredAddresses = this.addresses.filter(
      (addressObj) => addressObj['_id'] !== address._id
    );
    this.addresses = JSON.parse(JSON.stringify(filteredAddresses));

    this.user.address = JSON.parse(JSON.stringify(filteredAddresses));
    this.usersService.updateUser(this.user).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
