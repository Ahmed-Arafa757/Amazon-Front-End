import { Component, OnInit } from '@angular/core';
 import { Router } from '@angular/router';
import { Seller } from 'src/app/_model/sellers';
 import { SellerAuthService } from 'src/app/_services/seller-auth.service';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.scss']
})
export class SellerLoginComponent implements OnInit {
 seller:Seller={sellerName:'' ,email: '', password: '', repeatedPassword: '' };
 loggedInSeller: Seller;
  constructor(private sellerAuthService:SellerAuthService,private router: Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    console.log('this.person', this.seller);
    this.loggedInSeller= this.sellerAuthService.getSellerByEmail(this.seller.email);
    console.log('this.loggedInUser',this.loggedInSeller);
    
   
    localStorage.setItem('sellerId', this.loggedInSeller.sellerId);
    
    this.sellerAuthService.login(this.seller).subscribe(
      (res) => {
        // console.log(res['person']['id']);
        localStorage.setItem('token', res['token']);
        console.log(res);
        this.router.navigate(['seller/home']);
      },
      (err) => {
        console.log(err);
      },
      () => { },
    );
  }
  
}







