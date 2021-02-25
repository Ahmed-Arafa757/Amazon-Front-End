import { Component, OnInit } from '@angular/core';
import { Advertisement } from 'src/app/_model/advertisements';
import { Person } from 'src/app/_model/person';
import { Product } from 'src/app/_model/product';
import { AdvertisementsService } from 'src/app/_services/advertisements.service';
import { PersonService } from 'src/app/_services/person.service';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss'],
})
export class ProductListingComponent implements OnInit {
  products: Product[] = [];

  numOfPages: number[] = [];

  pageSize = 9;

  currentPage = 0;
  lastPage = 0;

  loggedInPerson: Person;
  constructor(
    private productService: ProductService,
    private personService: PersonService
  ) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (res: Product[]) => {
        this.products = res;
        this.lastPage = this.products.length / this.pageSize;
        this.calculateNumOfPages();
      },
      (err) => {
        console.error(err);
      },
      () => {}
    );
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

  SignedIn() {
    // return this.authService.isAuthenticated();

    if (localStorage.hasOwnProperty('personId')) {
      this.loggedInPerson = this.personService.getPersonById(
        localStorage.getItem('personId')
      );
      // console.log('this.loggedInPerson from header', this.loggedInPerson);
      return true;
    } else {
      return false;
    }
  }
}
