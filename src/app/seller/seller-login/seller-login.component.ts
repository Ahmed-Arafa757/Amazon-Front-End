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
        if (this.user && this.user.provider === 'GOOGLE') {
          this.sellerAuthService.signInWithGoogle(this.user).subscribe(
            (res: any) => {
              if(res.provider==="GOOGLE"){
                console.log(res)
              }else{
                console.error("provider no match");
              }
              // this.loggedIn = (user != null);
            },
            (err) => {
              if (err.error === "Email Not Found") {
                console.error("Email Not Found");
                this.router.navigate(['seller/signup'], {
                  queryParams: { name: this.user.name, email: this.user.email, provider: this.user.provider},
                });
               
              } else {
                console.error(err);
              }
            },
            () => {}
          );}
      }
      )
      .catch((err)=>{console.error(err);})
    
    }
    
    


  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      this.user = user;
      if (user && user.provider === 'FACEBOOK') {
        this.sellerAuthService.signInWithFB(user).subscribe(
          (res: any) => {
            if (res.length === 0) {
              this.router.navigate(['seller/signup'], {
                queryParams: { name: user.name, email: user.email },
              });
              console.log('Email Not Found');
              this.signOut();
            } else {
              console.log(res);
            }
          },
          (err) => {
            console.error(err);
          },
          () => {}
        );
      }
      this.loggedIn = user != null;
    });
  }

  signOut(){    
    this.authService.signOut();
  }

   onLogin(mySeller) {
   
this.sellerAuthService.getSellerByEmail(mySeller).subscribe(
      (res:any)=>{
        let exp=new Date().getTime()+36000 
        let myEmail=res.seller.email
        let myId=res.seller._id
        let myToken=res.token
        console.log(myEmail,exp,myId)
        var sellerLoginStorage = { 'email': myEmail, '_id': myId, 'timeExpiry': exp,'token':myToken};
         localStorage.setItem('sellerLoginStorage', JSON.stringify(sellerLoginStorage));
         this.router.navigate(['seller/home']);
       
         
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
