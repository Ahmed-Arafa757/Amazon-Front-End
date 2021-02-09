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
  // price: number = 39.99;
  // discount: number = 12.11;
  shippingFees: number = 36.3;
  DeliverTo: string = 'Egypt';
  constructor(private productService: ProductService) {}
  // name = '';
  ngOnInit(): void {
    console.log(this.product);
  }

  addToCart() {
    this.productService.productAdded.emit(this.product);
  }
}
