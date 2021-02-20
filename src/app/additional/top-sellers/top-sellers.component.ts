import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/_model/person';
import { PersonService } from 'src/app/_services/person.service';

@Component({
  selector: 'app-top-sellers',
  templateUrl: './top-sellers.component.html',
  styleUrls: ['./top-sellers.component.scss']
})
export class TopSellersComponent implements OnInit {

  loggedInPerson: Person;
  constructor(private personService: PersonService) { }

  ngOnInit(): void {
  }

  SignedIn() {
    // return this.authService.isAuthenticated(); 

    if (localStorage.hasOwnProperty("personId")) {

      this.loggedInPerson = this.personService.getPersonById(localStorage.getItem("personId"));
      // console.log('this.loggedInPerson from header', this.loggedInPerson);
      return true;

    }
    else {
      return false;
    }



  }

}
