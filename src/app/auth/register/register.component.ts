import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/_model/person';
import { User } from 'src/app/_model/users';
import { AuthService } from 'src/app/_services/auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit { 
  errorText = '';
  user: User = { userName: '', email: '', password: '', repeatedPassword: '' };

  constructor(private authService: AuthService, private router: Router,private activatedRoute:ActivatedRoute,) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.user.userName = params.name;
      this.user.email = params.email;
      this.user.provider = params.provider;
    });
    if(this.user.provider === undefined)
    {
      this.user.provider = '';
    }
  }

  onRegister() {
    this.authService.register(this.user).subscribe(
      (res) => {
        console.log(res); 
        this.router.navigate(['/home']);
      },
      (err) => {
        console.log(err);
        this.errorText = err['error'];
      },
      () => { },
    );
  }


}
