import { ProductService } from 'src/app/_services/product.service';
import { SellersService } from 'src/app/_services/sellers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Seller } from 'src/app/_model/sellers';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.scss'],
})
export class SellerHomeComponent implements OnInit {
  loggedInSeller: Seller = { sellerName: '', email: '' };
  products = [];

  numOfPages: number[] = [];
  myObj;
  mySellerId;
  pageSize = 9;

  currentPage = 0;
  lastPage = 0;
  constructor(
    private activatedRoute: ActivatedRoute,
    private sellersService: SellersService,
    private productService: ProductService
  ) {}

  ngOnInit(): any {
    if (localStorage.getItem('sellerLoginStorage')) {
      this.myObj = localStorage.getItem('sellerLoginStorage');
      this.mySellerId = JSON.parse(this.myObj)._id;
      this.sellersService.getProductBySeller(this.mySellerId).subscribe(
        (res: any) => {
          this.products = res;
        },
        (err) => {
          console.error(err.error);
        },
        () => {}
      );
      this.sellersService.getSellerById(this.mySellerId).subscribe(
        (res) => {
          this.loggedInSeller = res;
        },
        (err) => {
          console.log(err);
        },
        () => {}
      );
    }
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
  deleteProd(id) {
    this.productService.deleteProduct(id).subscribe(
      (res) => {
        this.sellersService.getProductBySeller(this.mySellerId).subscribe(
          (res: any) => {
            this.products = res;
          },
          (err) => {
            console.error(err.error);
          },
          () => {}
        );
      },
      (err) => {
        console.log(err);
      },
      () => {}
    );
  }
}
