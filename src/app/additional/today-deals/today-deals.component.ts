import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_model/product';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-today-deals',
  templateUrl: './today-deals.component.html',
  styleUrls: ['./today-deals.component.css']
})
export class TodayDealsComponent implements OnInit {
  products: Product[] = [];
  productsResult = [];
  mySearch:string;
  onKey(event) {
    this.mySearch = event.target.value.toLowerCase()
    this.productService.getAllProducts().subscribe(
      (res: any) => {
        this.products = res;
        this.onSaleProducts=res.filter((p)=>{return p.productPrice.onSale==="0"})
        this.productsResult = JSON.parse(JSON.stringify(this.onSaleProducts));
        this.productsResult = this.productsResult.filter(
          (p) =>{return p.productName.toLowerCase().includes(this.mySearch)}
        );
        this.currentPage = 0;
        this.lastPage = this.productsResult.length / this.pageSize;
        this.calculateNumOfPages();
       
      },
      (err) => {
        console.error(err);
      },
      () => {}
    );
  }
  
  searchInput: string = '';
  onSaleProducts;
  numOfPages: number[] = [];
  pageSize = 12;
  currentPage = 0;
  lastPage = 0;
  constructor( private productService: ProductService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (res: any) => {
        this.products = res;
        this.onSaleProducts=res.filter((p)=>{return p.productPrice.onSale==="0"})
        this.productsResult = JSON.parse(JSON.stringify(this.onSaleProducts));
        this.productsResult = this.productsResult.filter(
          (p) =>
            p.productName &&
            p.productName.toLowerCase().includes(this.searchInput)
        );
        this.currentPage = 0;
        this.lastPage = this.productsResult.length / this.pageSize;
        this.calculateNumOfPages();
       
      },
      (err) => {
        console.error(err);
      },
      () => {}
    );
  }
  sort(selectOption) {
    this.currentPage = 0;

    if (selectOption.value === '1') {
      return this.productsResult;
    }

    if (selectOption.value === '2') {
      this.productsResult.sort((a, b) => {
        return a.productPrice.finalPrice - b.productPrice.finalPrice;
      });
    }

    if (selectOption.value === '3') {
      this.productsResult.sort((a, b) => {
        return b.productPrice.finalPrice - a.productPrice.finalPrice;
      });
     
    }

    if (selectOption.value === '4') {
      this.productsResult.sort((a, b) => {
        let nameA = a.productName.toLowerCase();
        let nameB = b.productName.toLowerCase();

        return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
      });
    }
  }

  calculateNumOfPages() {
    this.numOfPages = [];
    for (
      let index = 0;
      index < this.productsResult.length / this.pageSize;
      index++
    ) {
      this.numOfPages.push(index + 1);
    }
  }

  getSlicedArrOfProducts() {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    return this.productsResult.slice(start, end);
  }
}
