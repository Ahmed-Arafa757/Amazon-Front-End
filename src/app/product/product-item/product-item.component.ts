import { Component, OnInit, Input } from '@angular/core';

import { Advertisement } from 'src/app/_model/advertisements';
import { Product } from 'src/app/_model/product';
import { AdvertisementService } from 'src/app/_services/advertisements.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;

  stars = [];

  iconClass = {
    0: 'far fa-star',
    0.5: 'fas fa-star-half-alt',
    1: 'fas fa-star',
  };

  constructor() {}

  ngOnInit(): void {
    this.fillStars();
  }
  fillStars() {
    this.stars = [0, 0, 0, 0, 0];
    var starsToFill = Math.round(this.product.productRate * 2) / 2;
    var i = 0;
    while (starsToFill > 0.5) {
      this.stars[i] = 1;
      i++;
      starsToFill--;
    }
    if (starsToFill === 0.5) {
      this.stars[i] = 0.5;
    }
  }

  getPrice() {
    if (this.product.productPrice.discount > 0) {
      return (
        this.product.productPrice.currentPrice -
        this.product.productPrice.discount
      );
    } else {
      return this.product.productPrice.currentPrice;
    }
  }
}
