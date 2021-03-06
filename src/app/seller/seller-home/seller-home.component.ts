import { SellersService } from 'src/app/_services/sellers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Seller } from 'src/app/_model/sellers';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.scss']
})
export class SellerHomeComponent implements OnInit {
  loggedInSeller: Seller={sellerName:'' , email:''};

  constructor(private activatedRoute:ActivatedRoute,private sellersService: SellersService ) { }

  ngOnInit(): any {
  if(localStorage.getItem('sellerLoginStorage')){
    let myObj=localStorage.getItem('sellerLoginStorage')
    let mySellerId=JSON.parse(myObj)._id

    this.sellersService.getSellerById(mySellerId).subscribe(
      (res)=>{
        this.loggedInSeller=res
        console.log(this.loggedInSeller.sellerName)
      },
      (err)=>{console.log(err)},
      ()=>{})
  }
  }

}
