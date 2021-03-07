import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_model/product';
import { CategoryService } from 'src/app/_services/category.service';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  products: Product[] = [];
  productsResult = [];
  searchInput: string = '';
  categories;
  numOfPages: number[] = [];
  pageSize = 12;
  currentPage = 0;
  lastPage = 0;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private categoryService:CategoryService
  ) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (res: any) => {
        this.products = res;

        this.activatedRoute.queryParams.subscribe(
          (params) => {
            this.productsResult = JSON.parse(JSON.stringify(this.products));
            if(params.id)
            {            
              this.searchInput = params.id.toLowerCase();
              this.productsResult = this.productsResult.filter(
                (p) =>
                  p.productName &&
                  p.productName.toLowerCase().includes(this.searchInput)
              );

            }
            else if(params.category)
            {            
              this.searchInput = params.category;
              this.productsResult = this.productsResult.filter(
                (p) =>
                  p.productCategory === this.searchInput
              );
                this.categoryService.geCategoryById(this.searchInput).subscribe(
                  (res:any)=>{
                    this.searchInput = res.name;
                  },
                  (err)=>{console.error(err)},
                  ()=>{},
                ) 
            }
            else if(params.sub)
            {            
              this.searchInput = params.sub;
              this.productsResult = this.productsResult.filter(
                (p) =>
                  p.productSubCategory === this.searchInput
              );
            }


            this.currentPage = 0;
            this.lastPage = this.productsResult.length / this.pageSize;
            this.calculateNumOfPages();
          },
          (err) => {
            console.log(err);
          },
          () => {}
        );
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
