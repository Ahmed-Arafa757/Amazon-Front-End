import { Component, EventEmitter, OnInit } from '@angular/core';
import { Product } from 'src/app/_model/product';
import { ProductService } from 'src/app/_services/product.service';
import { Person } from '../../_model/person';
import { AuthService } from '../../_services/auth.service';
import { PersonService } from '../../_services/person.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  person: Person = { name: 'a', email: '', password: '', repeatedPassword: '' };
  langFlag = '../../../assets/images/icons/english.png';

  cartArray = [];
  totalQuantity = 0;

  searchString: string = '';
  loggedInPerson: Person;

  constructor(
    private productService: ProductService,
    private authService: AuthService,
    private personService: PersonService
  ) {}

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
    // console.log(this.person);
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

    if (localStorage.hasOwnProperty('personId')) {
      this.loggedInPerson = this.personService.getPersonById(
        localStorage.getItem('personId')
      );
      // console.log('this.loggedInPerson from header', this.loggedInPerson);
      return true;
    } else {
      return false;
    }
  }
}
