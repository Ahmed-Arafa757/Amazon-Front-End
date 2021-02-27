// import { localizedString } from '@angular/compiler/src/output/output_ast';
import { Injectable,Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
// import { Person } from 'src/app/_model/person';
import { User } from 'src/app/_model/users';
import { AuthService } from 'src/app/_services/auth.service';
// import { PersonService } from 'src/app/_services/person.service';
import { UsersService } from 'src/app/_services/users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class LoginComponent implements OnInit {
  user: User = { email: '', password: ''};

  // loggedInUser;
  userLoggedIn = new EventEmitter<User>(); 

  constructor(private authService: AuthService,
    private router: Router,
    private usersService: UsersService) { }

  ngOnInit(): void {
  }

  onLogin(useR) {
    console.log('this.user', useR);
    // this.loggedInUser = this.usersService.getUserByEmail(this.user.email);
    // console.log('this.loggedInUser',this.loggedInUser);


    // localStorage.setItem('userId', this.loggedInUser.id);

    this.authService.login(useR).subscribe(
      (res) => {
        // console.log(res['person']['id']);
        localStorage.setItem('token', res['accessToken']);
        localStorage.setItem('user email', res['userEmail']);
        console.log('res on login',res);
       
        this.router.navigate(['/home']);
      },
      (err) => {
        console.log(err);
      },
      () => { },
    );
  }

}
