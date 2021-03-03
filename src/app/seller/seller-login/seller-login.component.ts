import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Seller } from 'src/app/_model/sellers';
import { SellerAuthService } from 'src/app/_services/seller-auth.service';
import { SocialAuthService } from 'angularx-social-login';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
} from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.scss'],
})
export class SellerLoginComponent implements OnInit {
  seller: Seller = {
    sellerName:'',
    email: '',
    password: '',
  };
  loggedInSeller: Seller;
  user: SocialUser;
  loggedIn: boolean;
  constructor(
    private sellerAuthService: SellerAuthService,
    private router: Router,
    private authService: SocialAuthService
  ) {}
  ngOnInit(): void { }


  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
    .then(
      (user)=>{
        this.user = user;
        this.sellerAuthService.signInWithGoogle(this.user).subscribe(
            (res: any) => {
              let mySellerName=res.seller.sellerName
              let myId=res.seller._id
              let myToken=res.token
              
              var sellerLoginStorage = {'_id': myId,'token':myToken};
              localStorage.setItem('sellerLoginStorage', JSON.stringify(sellerLoginStorage));
              this.router.navigate(['seller/home'], {
                queryParams: { sellerName:  mySellerName},
              });
            },
            (err) => {
              if (err.error === "Email Not Found") {
                console.error("Email Not Found");
                this.router.navigate(['seller/signup'], {
                  queryParams: { name: user.name, email: user.email, provider: user.provider},
                });
              
              } else if(err.error === "Provider Not Match"){
                console.error("Provider Not Match");
              } 
              else {
                console.error(err.error);
              }
              }
          )
      }
      )
      .catch((err)=>{console.error(err);})
    
    }
    
    


  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
    .then(
      (user)=>{
        this.user = user;
        this.sellerAuthService.signInWithFB(this.user).subscribe(
            (res: any) => {
              let mySellerName=res.seller.sellerName
              let myId=res.seller._id
              let myToken=res.token
              
              var sellerLoginStorage = {'_id': myId,'token':myToken};
              localStorage.setItem('sellerLoginStorage', JSON.stringify(sellerLoginStorage));
              this.router.navigate(['seller/home'], {
                queryParams: { sellerName:  mySellerName},
              });
            },
            (err) => {
              if (err.error === "Email Not Found") {
                console.error("Email Not Found");
                this.router.navigate(['seller/signup'], {
                  queryParams: { name: user.name, email: user.email, provider: user.provider},
                });
              
              } else if(err.error === "Provider Not Match"){
                console.error("Provider Not Match");
              } 
              else {
                console.error(err.error);
              }
              }
          )
      }
      )
      .catch((err)=>{console.error(err);})
    
  }

  signOut(){    
    this.authService.signOut();
  }

   onLogin(mySeller) {
   
this.sellerAuthService.login(mySeller).subscribe(
      (res:any)=>{
        let mySellerName=res.seller.sellerName
        let myId=res.seller._id
        let myToken=res.token

        var sellerLoginStorage = {'_id': myId, 'token':myToken};
         localStorage.setItem('sellerLoginStorage', JSON.stringify(sellerLoginStorage));
         this.router.navigate(['seller/home'], {
          queryParams: { sellerName:  mySellerName},
        });
       
         
      },
      (err)=>{console.log(err)},
      () => {console.log() },
      )
    
  }
  showPassword() {
    var x = document.getElementById('password') as HTMLInputElement;
    if (x.type === 'password') {
      x.type = 'text';
    } else {
      x.type = 'password';
    }
  }
}
