import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Product } from './../../../_model/product';
import { ProductService } from 'src/app/_services/product.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/_services/category.service';
import { ReviewsService } from 'src/app/_services/reviews.service';
import { HeaderComponent } from 'src/app/layout/header/header.component';
import { SellersService } from 'src/app/_services/sellers.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css'],
})
export class ProductInfoComponent implements OnInit {
  sellers;
  currerntLang = localStorage.getItem('currentLang');
  imageShowIndex = 0;
  productInfo = [];
  productDescription;
  sellerNM;
  categoryID;
  product: Product = {
    productId: 0,
    productName: '',
    productInfo: null,
    productPrice: {
      currentPrice: 0,
      discount: 0,
      finalPrice: 0,
      currency: '',
      onSale: '',
    },
    productImages: [''],
    productType: '',
    productCategory: '', //CategoryID
    productSubCategory: '', //Category -> Sub array[]
    keywords: [''],
    warehouseId: '', //warehouseId
    productStock: 0,
    productSales: '', //salesId
  };
  tempProduct;
  cartArray = [];
  cartQuantity = 0;

  shippingFees: number = 36.3;
  DeliverTo: string = this.currerntLang == 'en' ? 'Egypt' : 'مصر';
  relatedProducts = [];
  similarProduct = { productImages: [], finalPrice: 0, productName: '' };
  similarProductReview;
  searchProductsByKeywords(...params) {
    console.log(params);

    this.productService.getAllProducts().subscribe(
      (res: any) => {
        var results = res;

        var related = results.filter((p) => {
          return p.keywords.includes(params[0]);
        });
        for (let index = 1; index < params.length; index++) {
          related = related.filter((p) => {
            return p.keywords.includes(params[index]);
          });
        }

        this.relatedProducts = related.slice(0, 10);
        this.similarProduct = related.slice(0, 1)[0];
        console.log(results);

        console.log(this.similarProduct);
      },
      () => {},
      () => {}
    );
  }
  constructor(
    private productService: ProductService,
    private activeRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private reviwService: ReviewsService,
    private sellerService: SellersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reviwService.latestReviews.subscribe((res) => {});
    console.log(this.product);
    this.sellerService.getAllSellers().subscribe(
      (res) => {
        this.sellers = res;
      },
      (err) => {
        console.error(err);
      },
      () => {}
    );
    this.activeRoute.url.subscribe(
      (res) => {
        this.productService.productById(res[2].path).subscribe((res) => {
          this.product = res;
          this.categoryID = this.product.productCategory;
          console.log(this.product.productInfo[0]);

          for (const key in this.product.productInfo[0]) {
            if (key == 'color') {
              continue;
            }
            if (key == 'description') {
              this.productDescription = this.product.productInfo[0][key];
              continue;
            }
            this.productInfo.push({
              name: key,
              value: this.product.productInfo[0][key],
            });
          }
          this.sellerNM = this.sellerName(this.product.productSales);
          this.productDescription = this.productDescription.split('\n');

          console.log(this.productInfo);

          this.categoryService
            .geCategoryById(this.product.productCategory)
            .subscribe((res) => {
              console.log(res);
              this.product.productCategory = res['name'];
              console.log(this.product.productCategory);

              res;
            });
          console.log(this.product);

          this.searchProductsByKeywords(
            this.product.keywords[0],
            this.product.keywords[1]
          );
        });
      },
      () => {},
      () => {}
    );
    // this.productService.productById( )
  }
  changeMainImge(i) {
    this.imageShowIndex = i;
    console.log(this.imageShowIndex);
  }
  sellerName(id) {
    if (id != undefined && this.sellers.length != 0) {
      return this.sellers.find((seller) => seller._id === id).sellerName;
    } else {
      return 'undefined';
    }
  }

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

  searchByCategory() {
    this.router.navigate(['search-results/category/'], {
      queryParams: { category: this.categoryID },
    });
  }
  searchBySubCategory() {
    this.router.navigate(['search-results/sub_category/'], {
      queryParams: { sub: this.product.productSubCategory },
    });
  }
}
