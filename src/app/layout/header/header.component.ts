import { Component, EventEmitter, OnInit, DoCheck } from '@angular/core';
import { Product } from 'src/app/_model/product';
import { ProductService } from 'src/app/_services/product.service';
// import { Person } from '../../_model/person';
import { User } from '../../_model/users';
import { AuthService } from '../../_services/auth.service';
import { UsersService } from '../../_services/users.service';
import { LoginComponent } from '../../auth/login/login.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // person: Person = { name: '', email: '', password: '', repeatedPassword: '' };
  langFlag = '../../../assets/images/icons/english.png';
  currentLang: string;
  cartArray = [];
  totalQuantity = 0;

  searchString: string = '';
  loggedInUser;
  isLogged: boolean = false;

  constructor(
    private productService: ProductService,
    private authService: AuthService,

    private usersService: UsersService,
    private loginService: LoginComponent,
    public translate: TranslateService
  ) {
    this.currentLang = localStorage.getItem('currentLang') || 'en';
    this.translate.use(this.currentLang);
    if (this.currentLang === 'en') {
      this.langFlag = '../../../assets/images/icons/english.png';
    } else {
      this.langFlag = '../../../assets/images/icons/arabic.png';
    }
  }

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

  changeCurrentLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('currentLang', lang);
    if (lang === 'en') {
      this.langFlag = '../../../assets/images/icons/english.png';
    } else {
      this.langFlag = '../../../assets/images/icons/arabic.png';
    }
  }

  SignedIn() {
    if (
      localStorage.hasOwnProperty('token') &&
      localStorage.hasOwnProperty('user email')
    ) {
      this.loggedInUser = localStorage.getItem('user email').split('@')[0];
      // console.log(this.loggedInUser);
      this.isLogged = true;
      return true;
    } else {
      this.isLogged = false;
      return false;
    }
  }
}
