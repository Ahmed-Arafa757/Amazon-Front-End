import { Component, EventEmitter, OnInit } from '@angular/core';
import { Product } from 'src/app/_model/product';
import { ProductService } from 'src/app/_services/product.service';
// import { Person } from '../../_model/person';
import { User } from '../../_model/users';
import { AuthService } from '../../_services/auth.service';
import { UsersService } from '../../_services/users.service';
import { LoginComponent } from '../../auth/login/login.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // person: Person = { name: 'a', email: '', password: '', repeatedPassword: '' };
  langFlag = '../../../assets/images/icons/english.png';

  cartArray = [];
  totalQuantity = 0;


  searchString: string;
  loggedInUser;


  constructor(
    private productService: ProductService,
    private authService: AuthService,

    private usersService: UsersService,
    private loginService: LoginComponent
  ) { }


  ngOnInit(): void {
    this.productService.productAdded.subscribe(
      (res) => {

        this.totalQuantity = 0;
        for (let index = 0; index < res.length; index++) {
          this.totalQuantity += res[index].quantity;
        }
      },
      (err) => {
        console.error(err);
      },
      (completed) => {
        alert('Subscribe Operation Compeleted');
      }
    );

    console.log('header on init');

  }

  toggle(input) {
    if (input.id === 'english-lang') {
      this.langFlag = '../../../assets/images/icons/english.png';
    } else {
      this.langFlag = '../../../assets/images/icons/arabic.png';
    }
  }

  SignedIn() {
    // return this.authService.isAuthenticated();
    if (localStorage.hasOwnProperty("token")) {
      if (localStorage.hasOwnProperty("user id")) {        
  

       // this.usersService.getUserById(localStorage.getItem("user id")).subscribe(
        //  (res) => {
            // console.log('returned user found by id', res);
          //  this.loggedInUser = res['email'].split('@')[0];
         // },
        //  (err) => { console.log(err)},
         // () => { },

        // .split('@')[0];
        // console.log('this.loggedInPerson from header', this.loggedInPerson);
    //  }



      return true;

    }
    else {
      return false;
    }




  }
}
}
