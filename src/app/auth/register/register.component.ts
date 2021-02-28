import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/_model/person';
import { User } from 'src/app/_model/users';
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit { 
  user: User = { userName: '', email: '', password: '', repeatedPassword: '' };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

  }

  onRegister() {
    this.authService.register(this.user).subscribe(
      (res) => {
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
