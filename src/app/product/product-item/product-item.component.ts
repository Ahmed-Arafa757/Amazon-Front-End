import { Component, OnInit , Input} from '@angular/core';

import { Advertisement } from 'src/app/_model/advertisements';
import { AdvertisementService } from 'src/app/_services/advertisements.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {


 
  constructor() { }

  ngOnInit(): void {

  }



}
