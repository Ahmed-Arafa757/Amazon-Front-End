import { Component, OnInit } from '@angular/core';
import { Advertisement } from 'src/app/_model/advertisements';
import { AdvertisementService } from 'src/app/_services/advertisements.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void { 

  }

  // getProducts() {
  //  return this.advertisementsService.getAllAds().slice(0, 12);
  // }

}
