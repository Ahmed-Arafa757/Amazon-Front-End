import { Component, OnInit } from '@angular/core';
import Splide from '@splidejs/splide';
import { Person } from 'src/app/_model/person';
import { PersonService } from 'src/app/_services/person.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private personService: PersonService) { }
  
  loggedInPerson: Person;

  ngOnInit(): void {
    let elms: any = document.getElementsByClassName('splide');
    for (let i = 0, len = elms.length; i < len; i++) {
      new Splide(elms[i], {
        type: 'loop',
        gap: 20,
        cover: true,
        height: '10rem',
        autoWidth: true, 
        focus: 'center',
        autoplay: true,
        interval: 2000,
      }).mount();
    }
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
