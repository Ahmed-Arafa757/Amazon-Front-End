import { SellersService } from './../../_services/sellers.service';
import { Component, OnInit } from '@angular/core';
import { Seller } from 'src/app/_model/sellers';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-seller-register',
  templateUrl: './seller-register.component.html',
  styleUrls: ['./seller-register.component.scss']
})
export class SellerRegisterComponent implements OnInit {
  seller:Seller
  constructor(private sellersService:SellersService) { }

  ngOnInit(): void {
  }
  onSubmit(form:Form){
    console.log(form)
    const newSeller: Seller = {
     
      // sellerName: form.sellerName,
      // address: form.address,
      
      // shortDesc: form.shortDesc,
      // websiteURL: seller.websiteURL,
      // email: seller.email,
      // password: seller.password



  };
    // console.log(this.sellersService.sellers)
    // this.sellersService.addSeller(newSeller)
    // this.sellerAuthService.login(this.seller).subscribe(
    //   (response)=>{
    //     localStorage.setItem('token',response['token']);
    //    console.log(response);
    //    this.router.navigate(['/product']);
    //   },
    //   (err)=>{console.log(err);
    //   },
    //   ()=>{}
    // )
  }  
}
