import { localizedString } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/_model/person';
import { AuthService } from 'src/app/_services/auth.service';
import { PersonService } from 'src/app/_services/person.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  person: Person = {name: '' , email: '', password: '', repeatedPassword: '' };

   loggedInUser: Person;
  constructor(private authService: AuthService,
    private router: Router,
    private personService:PersonService) { }

  ngOnInit(): void {
  }

  onLogin() {
    console.log('this.person', this.person);
    this.loggedInUser = this.personService.getPersonByEmail(this.person.email);
    console.log('this.loggedInUser',this.loggedInUser);
    
   
    localStorage.setItem('personId', this.loggedInUser.id);
    
    this.authService.login(this.person).subscribe(
      (res) => {
        // console.log(res['person']['id']);
        localStorage.setItem('token', res['token']);
        console.log(res);
        this.router.navigate(['/home']);
      },
      (err) => {
        console.log(err);
      },
      () => { },
    );
  }

}
