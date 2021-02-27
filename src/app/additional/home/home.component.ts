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
    // return this.authService.isAuthenticated();

    if (localStorage.hasOwnProperty("token")) {
      if (localStorage.hasOwnProperty("user email")) {

        this.loggedInUser = localStorage.getItem('user email').split('@')[0];
        console.log(this.loggedInUser);


      }

  //    this.usersService.getUserById(localStorage.getItem("user id")).subscribe(
   //     (res) => {
    //      console.log('returned user found by id', res);
    //      this.loggedInUser = res['email'].split('@')[0];
     //   },
     //   (err) => { console.log(err)},
    //    () => { },
    //  )




      return true;

    }
    else {
      return false;
    }



  }
}
