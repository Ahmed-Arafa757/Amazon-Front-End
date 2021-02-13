import { Component, Input, OnInit } from '@angular/core';
import { Product } from './../../../_model/product';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css'],
})
export class ProductInfoComponent implements OnInit {
  @Input() product: Product;

  tempProduct;
  cartArray = [];
  cartQuantity = 0;

  shippingFees: number = 36.3;
  DeliverTo: string = 'Egypt';
  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  addToCart() {
    this.cartArray = this.productService.cartProducts.slice();
    this.tempProduct = JSON.parse(JSON.stringify(this.product));
    this.tempProduct.quantity = 1;
    let inCart = false;

    for (let index = 0; index < this.cartArray.length; index++) {
      if (this.cartArray[index]._id === this.product._id) {
        if (this.cartArray[index].quantity < 5) {
          this.cartArray[index].quantity += 1;
          this.cartQuantity++;
        }
        inCart = true;
        break;
      }
    }

    if (inCart === false) {
      let deepCopy = JSON.parse(JSON.stringify(this.tempProduct));
      this.cartArray.push(deepCopy);
      this.cartQuantity++;
    }

    this.productService.addProductsToCart(this.cartArray);
  }
}
