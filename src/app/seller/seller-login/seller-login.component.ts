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
    sellerName: '',
    email: '',
    password: '',
    repeatedPassword: '',
  };
  loggedInSeller: Seller;
  user: SocialUser;
  loggedIn: boolean;
  constructor(
    private sellerAuthService: SellerAuthService,
    private router: Router,
    private authService: SocialAuthService
  ) {}
  ngOnInit(): void {}
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      this.user = user;
      if (user && user.provider === 'GOOGLE') {
        this.sellerAuthService.signInWithGoogle(user).subscribe(
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

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      this.user = user;
      if (user && user.provider === 'FACEBOOK') {
        this.sellerAuthService.signInWithFB(user).subscribe(
          (res: any) => {
            if (res.length === 0) {
              this.router.navigate(['seller/signup']);
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

  signOut(): void {
    this.authService.signOut();
  }

  onLogin() {
    // console.log('this.person', this.seller);
    // this.loggedInSeller= this.sellerAuthService.getSellerByEmail(this.seller.email);
    // console.log('this.loggedInUser',this.loggedInSeller);
    // localStorage.setItem('_Id', this.loggedInSeller._Id);
    // this.sellerAuthService.login(this.seller).subscribe(
    //   (res) => {
    //     // console.log(res['person']['id']);
    //     localStorage.setItem('token', res['token']);
    //     console.log(res);
    //     this.router.navigate(['seller/home']);
    //   },
    //   (err) => {
    //     console.log(err);
    //   },
    //   () => { },
    // );
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
