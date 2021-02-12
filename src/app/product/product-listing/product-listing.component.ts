import { Component, OnInit } from '@angular/core';
import { Advertisement } from 'src/app/_model/advertisements';
import { Product } from 'src/app/_model/product';
import { AdvertisementService } from 'src/app/_services/advertisements.service';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss'],
})
export class ProductListingComponent implements OnInit {
  products: Product[];

  numOfPages: number[] = [];

  pageSize = 9;

  currentPage = 0;
  lastPage = 0;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
    this.lastPage = this.products.length / this.pageSize;
    this.calculateNumOfPages();
  }

  calculateNumOfPages() {
    this.numOfPages = [];
    for (let index = 0; index < this.products.length / this.pageSize; index++) {
      this.numOfPages.push(index + 1);
    }
  }

  getSlicedArrOfProducts() {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    return this.products.slice(start, end);
  }

  // getProducts() {
  //  return this.advertisementsService.getAllAds().slice(0, 12);
  // }
}
