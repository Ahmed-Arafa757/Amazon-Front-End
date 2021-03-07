import { Component, EventEmitter, OnInit, DoCheck } from '@angular/core';
import { Product } from 'src/app/_model/product';
import { ProductService } from 'src/app/_services/product.service';
// import { Person } from '../../_model/person';
import { User } from '../../_model/users';
import { AuthService } from '../../_services/auth.service';
import { UsersService } from '../../_services/users.service';
import { LoginComponent } from '../../auth/login/login.component';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, DoCheck {
  langFlag = '../../../assets/images/icons/english.png';
  currentLang: string;
  cartArray = [];
  totalQuantity = 0;
  loggedInSeller:boolean=false;
  searchString: string = '';
  loggedInUser;
  isLogged: boolean = false;

  constructor(
    private productService: ProductService,
    private authService: AuthService,
    private router: Router,
    private usersService: UsersService,
    private loginService: LoginComponent,
    public translate: TranslateService
  ) {
    this.currentLang = localStorage.getItem('currentLang') || 'en';
    this.translate.use(this.currentLang);
    //Changing the html lang attribute also
    document.documentElement.lang = this.currentLang;
    if (this.currentLang === 'en') {
      this.langFlag = '../../../assets/images/icons/english.png';
    } else {
      this.langFlag = '../../../assets/images/icons/arabic.png';
    }
  }
  search(key){
    this.router.navigate(['search-results/'],{queryParams:{id:key}});
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
  searchByCategory(name){
    this.router.navigate(['search-results/category/'],{queryParams:{category:name}});
  }
  ngDoCheck() {
    if (this.isLogged === false) {
      if (
        localStorage.hasOwnProperty('token') &&
        localStorage.hasOwnProperty('user id')
      ) {


        this.usersService.getUserById(localStorage.getItem('user id')).subscribe(
          (res) => {
            console.log('res');
            this.loggedInUser = res['userName']; 


          },
          (err)=>{console.log(err);
          },
          ()=>{}
        )


        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
    } else {
      if (
        localStorage.hasOwnProperty('token') &&
        localStorage.hasOwnProperty('user id')
      ) {
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
    }
    if(localStorage.getItem('sellerLoginStorage')){
      this.loggedInSeller=true
      
    }else{
      this.loggedInSeller=false
      
    }
  }

  changeCurrentLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('currentLang', lang);
    this.currentLang = lang;

    //Changing the html lang attribute also
    document.documentElement.lang = lang;
    if (lang === 'en') {
      this.langFlag = '../../../assets/images/icons/english.png';
    } else {
      this.langFlag = '../../../assets/images/icons/arabic.png';
    }
    this.currentLang=lang;
  }

  logout() {
    localStorage.removeItem('user id');
    localStorage.removeItem('token');
  }
  logoutSeller(){
    localStorage.removeItem('sellerLoginStorage');
    this.router.navigate(['/home']);
  }

}
