import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/_model/product';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartArray: Product[] = [];
  newCart = [];
  index = null;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.productAdded.subscribe(
      (res) => {
        this.index = this.cartArray.indexOf(res);
        if (this.index >= 0) {
          this.newCart[this.index].quantity += 1;
        } else {
          this.cartArray.push(res);
          res.quantity = 1;
          this.newCart.push(res);
        }
        console.log('cart ngOnInit');
        console.log(this.newCart);
        console.log('*************************');
      },
      (err) => {
        console.error(err);
      },
      (completed) => {
        alert('Subscribe Operation Compeleted');
      }
    );
  }
}
