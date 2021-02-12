import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { Seller } from 'src/app/_model/sellers';
// import { SellerAuthService } from 'src/app/_services/seller-auth.service';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.scss']
})
export class SellerLoginComponent implements OnInit {
 seller:Seller={email:'',password:''};
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.seller)
    
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







