import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Seller } from 'src/app/_model/sellers';
import { SellerAuthService } from 'src/app/_services/seller-auth.service';

import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.scss']
})
export class SellerLoginComponent implements OnInit {
 seller:Seller={sellerName:'' ,email: '', password: '', repeatedPassword: '' };
 loggedInSeller: Seller;
 user: SocialUser;
  loggedIn: boolean;
 /* guser; */
  /* constructor(
    private sellerAuthService:SellerAuthService,
    private router: Router,
    ngZone : NgZone
    ) {
      window['onSignIn'] = user => ngZone.run(
        ()=>{
          this.afterSignUp(user)
        }
      );
     }
  afterSignUp(googleUser){
    this.guser = googleUser;
  } */
  constructor(
    private sellerAuthService:SellerAuthService,
    private router: Router,
    private authService: SocialAuthService
    ) { }
    ngOnInit(): void {
      this.authService.authState.subscribe((user) => {
        this.user = user;
        console.log(user)
        this.loggedIn = (user != null);
      });
    }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
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
  showPassword() {

    var x = document.getElementById("password") as HTMLInputElement;
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

}







