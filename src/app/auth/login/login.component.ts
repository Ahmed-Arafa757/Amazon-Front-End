// import { localizedString } from '@angular/compiler/src/output/output_ast';
import { Injectable, Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
// import { Person } from 'src/app/_model/person';
import { User } from 'src/app/_model/users';
import { AuthService } from 'src/app/_services/auth.service';
// import { PersonService } from 'src/app/_services/person.service';
import { UsersService } from 'src/app/_services/users.service';
import { SocialAuthService } from 'angularx-social-login';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
} from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class LoginComponent implements OnInit {


  user: User = { email: '', password: '' };

  // loggedInUser;
  errorText = '';

  constructor(private authService: AuthService,
    private router: Router,
    private usersService: UsersService,
    private socialAuthService: SocialAuthService) { }

  ngOnInit(): void {
  }
  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(
        (user) => {
          this.usersService.signInWithGoogle(user).subscribe(
            (res: any) => {
              console.log(res);
              // this.loggedIn = (user != null);
              localStorage.setItem('token', res.accessToken);
              localStorage.setItem('user id', res.userId);
             
              console.log('res on login', res);
              this.router.navigate(['/home']);
            },
            (err) => {
              if (err.error === 'Email Not Found') {
                console.error('Email Not Found');
                this.router.navigate(['register'], {
                  queryParams: { name: user.name, email: user.email, provider: user.provider },
                });

              } else if (err.error === 'Provider Not Match') {
                console.error('Provider Not Match');
              }
              else {
                console.error(err.error);
              }
            },
            () => { }
          );
        }
      )
      .catch((err) => { console.error(err); });

  }
  signInWithFB(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID)
      .then(
        (user) => {
          this.usersService.signInWithFB(user).subscribe(
            (res: any) => {
              console.log(res); 
              // this.loggedIn = (user != null);
              localStorage.setItem('token', res.accessToken);
              localStorage.setItem('user id', res.userId);
              console.log('res on login', res);
              this.router.navigate(['/home']);
            },
            (err) => {
              if (err.error === 'Email Not Found') {
                console.error('Email Not Found');
                this.router.navigate(['register'], {
                  queryParams: { name: user.name, email: user.email, provider: user.provider },
                });

              } else if (err.error === 'Provider Not Match') {
                console.error('Provider Not Match');
              }
              else {
                console.error(err.error);
              }
            },
            () => { }
          );
        }
      )
      .catch((err) => { console.error(err); });
  }
  signOut() {
    this.socialAuthService.signOut();
  }
  onLogin(useR) {
    console.log('this.user', useR);
   

    this.authService.login(useR).subscribe(
      (res) => {
       
        localStorage.setItem('token', res['accessToken']);
        localStorage.setItem('user id', res['userId']);
        console.log('res on login', res);


        this.router.navigate(['/home']);
      },
      (err) => {

        console.log('err', err.error);
        this.errorText = err.error;
      },
      () => { },
    );
  }

}
