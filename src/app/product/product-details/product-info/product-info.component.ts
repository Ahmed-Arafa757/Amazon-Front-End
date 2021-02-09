import { Component, Input, OnInit } from '@angular/core';
import { Product } from './../../../_model/product';

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
  constructor() {}
  // name = '';
  ngOnInit(): void {
    console.log(this.product);
  }
}
