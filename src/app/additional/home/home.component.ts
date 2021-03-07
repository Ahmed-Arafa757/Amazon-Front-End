import { Component, OnInit, DoCheck } from '@angular/core';
import Splide from '@splidejs/splide';
import { Product } from 'src/app/_model/product';
// import { Person } from 'src/app/_model/person';
import { PersonService } from 'src/app/_services/person.service';
import { ProductService } from 'src/app/_services/product.service';
import { UsersService } from 'src/app/_services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, DoCheck {
  isLogged: boolean = false;
  loggedInUser;
  products: Product[] = [];
  topSellerProducts: Product[] = [];
  beautySkinProducts: Product[] = [];
  electronicsProducts: Product[] = [];
  phoneProducts: Product[] = [];
  clothingShoesProducts: Product[] = [];
  constructor(
    private personService: PersonService,
    private usersService: UsersService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    let elms: any = document.getElementsByClassName('splide');
    for (let i = 0, len = elms.length; i < len; i++) {
      new Splide(elms[i], {
        type: 'loop',
        gap: 20,
        cover: true,
        height: '10rem',
        autoWidth: true,
        focus: 'center',
        autoplay: true,
        interval: 2000,
      }).mount();
    }
    this.productService.getAllProducts().subscribe(
      (res: Product[]) => {
        
        for (let index = 0; index < res.length; index++) {
          if (
            res[index].productSubCategory === 'Skin Care' ||
            res[index].productSubCategory === 'Makeup'
          ) {
            this.beautySkinProducts.push(res[index]);
          } else if (
            res[index].productSubCategory === 'Video Games' ||
            res[index].productSubCategory === 'PlayStation 4' ||
            res[index].productSubCategory === 'Computer Components'
          ) {
            this.electronicsProducts.push(res[index]);
          } else if (
            res[index].productSubCategory === 'Cell Phones & Accessories'
          ) {
            this.phoneProducts.push(res[index]);
          } else if (
            res[index].productSubCategory === 'Clothing' ||
            res[index].productSubCategory === 'Shoes'
          ) {
            this.clothingShoesProducts.push(res[index]);
          }
        }

        this.products = res;
        this.topSellerProducts = this.getRandom(this.products, 10);
      },
      (err) => {
        console.error(err);
      },
      () => {}
    );
  }
  logout() {
    localStorage.removeItem('user id');
    localStorage.removeItem('token');
  }
  ngDoCheck() {
    if (this.isLogged === false) {
      if (
        localStorage.hasOwnProperty('token') &&
        localStorage.hasOwnProperty('user id')
      ) {
        this.usersService
          .getUserById(localStorage.getItem('user id'))
          .subscribe(
            (res) => {
              
              this.loggedInUser = res['userName'];
            },
            (err) => {
              console.log(err);
            },
            () => {}
          );

        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
    } else {
      if (
        localStorage.hasOwnProperty('token') &&
        localStorage.hasOwnProperty('user id')
      ) {
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
    }
  }
  getRandom(arr, n) {
    var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
    if (n > len)
      throw new RangeError('getRandom: more elements taken than available');
    while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }
}
