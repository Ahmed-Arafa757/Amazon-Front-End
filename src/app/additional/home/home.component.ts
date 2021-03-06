import { Component, OnInit, DoCheck } from '@angular/core';
import Splide from '@splidejs/splide';
// import { Person } from 'src/app/_model/person';
import { PersonService } from 'src/app/_services/person.service';
import { UsersService } from 'src/app/_services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, DoCheck {
  isLogged: boolean = false;
  loggedInUser;
  constructor(
    private personService: PersonService,
    private usersService: UsersService
  ) {}

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
  logout() {
    localStorage.removeItem('user id');
    localStorage.removeItem('token');
  }
  ngDoCheck() {

    if (this.isLogged === false) {

      if (
        localStorage.hasOwnProperty('token') &&
        localStorage.hasOwnProperty('user id')

      ) {

        this.usersService.getUserById(localStorage.getItem('user id')).subscribe(
          (res) => {
            console.log(res);
            this.loggedInUser = res['userName']; 


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

 
}
