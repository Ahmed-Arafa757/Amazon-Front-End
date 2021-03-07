import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/_services/person.service';
import { Person } from '../../_model/person';

@Component({
  selector: 'app-discover-amazon',
  templateUrl: './discover-amazon.component.html',
  styleUrls: ['./discover-amazon.component.scss']
})
export class DiscoverAmazonComponent implements OnInit {

  constructor(private personService:PersonService) { }

  ngOnInit(): void { 
  }

  loggedInPerson: Person;

  SignedIn() {
    // return this.authService.isAuthenticated(); 

    if (localStorage.hasOwnProperty("personId")) {

      this.loggedInPerson = this.personService.getPersonById(localStorage.getItem("personId"));

      return true;

    }
    else {
      return false;
    }



  }

}
