
import { SellersService } from 'src/app/_services/sellers.service';
import { Component, OnInit, Input } from '@angular/core';

import { Advertisement } from 'src/app/_model/advertisements';
import { Product } from 'src/app/_model/product';
import { AdvertisementsService } from 'src/app/_services/advertisements.service';
import { ProductService } from 'src/app/_services/product.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product; 
sellers:any=[];
  stars = [];
  iconClass = {
    0: 'far fa-star',
    0.5: 'fas fa-star-half-alt',
    1: 'fas fa-star',
  };
  loggedInSeller:boolean=false;
  tempProduct;
  cartArray = [];
  cartQuantity = 0;
  constructor(private sellerService:SellersService, private productService: ProductService,) {}

  ngOnInit(): void {
    this.fillStars();
    this.sellerService.getAllSellers().subscribe(
      (res)=>{​​this.sellers=res}​​,
      (err)=>{​​console.error(err)}​​,
      ()=>{​​}​​,

    );
    if(localStorage.getItem('sellerLoginStorage')){
      this.loggedInSeller=true
    }else{
      this.loggedInSeller=false
    }

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
  sellerName(id){​​​​    
    if(id!=undefined && this.sellers.length!=0){​​​​
      return this.sellers.find((seller)=>seller._id===id).sellerName
    }​​​​else{​​​​
      return 'undefined' 
     }​​​​
  }
  ​​​​addToCart() {
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
