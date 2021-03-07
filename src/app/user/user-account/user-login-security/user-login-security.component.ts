import { Component, OnInit , DoCheck} from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/_model/users';
import { UsersService } from 'src/app/_services/users.service';



@Component({
  selector: 'app-user-login-security',
  templateUrl: './user-login-security.component.html',
  styleUrls: ['./user-login-security.component.css']
})
export class UserLoginSecurityComponent implements OnInit, DoCheck {
  loggedInUser;
  isLogged: Boolean = false;
  responseText = '';

  userNameEdit: Boolean = false;
  emailEdit: Boolean = false;
  phoneEdit: Boolean = false;
  passwordEdit: Boolean = false;
  repeatedPasswordEdit: Boolean = false;

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    if (this.isLogged === false) {

      if (
        localStorage.hasOwnProperty('token') &&
        localStorage.hasOwnProperty('user id')

      ) {

        this.usersService.getUserById(localStorage.getItem('user id')).subscribe(
          (res) => {
            this.loggedInUser = res;
            console.log('DoCheck ',this.loggedInUser);

          },
          (err) => {
            console.log(err);
          },
          () => { }
        )

        this.isLogged = true;

      } else {
        this.isLogged = false;
      }

    } else {
      if (localStorage.hasOwnProperty('token') &&
        localStorage.hasOwnProperty('user id')) {
        this.isLogged = true;

      } else {
        this.isLogged = false;

      }
    }
  }

  onSubmit() {
    console.log('on Submit ',this.loggedInUser);

    this.usersService.updateUser(this.loggedInUser).subscribe(
      (res)=>{
        console.log('on Done clicked', res);


      },
      (err) => {
        console.log(err);
        this.responseText = err['error'].text;
        console.log(this.responseText);


      },
      ()=>{},
    )
  }

  userNameEditClicked() {
    this.userNameEdit = true;
  }
  emailEditClicked() {
    this.emailEdit = true;
  }
  phoneEditClicked() {
    this.phoneEdit = true;
  }
  passwordEditClicked() {
    this.passwordEdit = true;
  }
  repeatedPasswordEditClicked() {
    this.repeatedPasswordEdit = true;
  }

}
