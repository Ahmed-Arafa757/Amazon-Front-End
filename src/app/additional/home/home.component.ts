import { Component, OnInit } from '@angular/core';
import Splide from '@splidejs/splide';
// import { Person } from 'src/app/_model/person';
import { PersonService } from 'src/app/_services/person.service';
import { UsersService } from 'src/app/_services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loggedInUser;
  constructor(private personService: PersonService,
    private usersService: UsersService) { }



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

    if (localStorage.hasOwnProperty("token") && localStorage.hasOwnProperty("user email")) {


      this.loggedInUser = localStorage.getItem('user email').split('@')[0];
      console.log(this.loggedInUser);


      return true;

    }
    else {
      return false;
    }


  }
}
