import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-add',
  templateUrl: './seller-add.component.html',
  styleUrls: ['./seller-add.component.scss']
})
export class SellerAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  addImg(test){
    console.log(test);
    
  }
}
