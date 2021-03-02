import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/_model/person';
import { UsersService } from 'src/app/_services/users.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css'],
})
export class ResetpasswordComponent implements OnInit {
  EmailStatus = EmailStatusEnum;
  person: Person = { name: '', email: '', password: '', repeatedPassword: '' };
  emailStatus = this.EmailStatus.unset;
  type = 'enterMail';
  updatedPasswordMsg;
  constructor(
    private userService: UsersService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params.id);
    console.log(this.activatedRoute.snapshot.params.resetToken);

    if (this.activatedRoute.snapshot.params.resetToken) {
      this.type = 'enterNewPassword';
    }
  }

  ResetPassword() {
    this.userService.getUserByEmail(this.person.email).subscribe((res) => {
      if (res[0]) {
        this.emailStatus = this.EmailStatus.found;

        this.userService.resetPassword(res[0]['_id']).subscribe((r) => {
          console.log(res[0]['_id'], 'done', r);
        });
      } else {
        this.emailStatus = this.EmailStatus.notFound;
      }
    });
  }

  assignNewPassword() {
    this.userService
      .saveNewPassword(
        this.activatedRoute.snapshot.params.resetToken,
        this.activatedRoute.snapshot.params.id,
        this.person.password,
        this.person.repeatedPassword
      )
      .subscribe((res) => {
        console.log(res);
        this.updatedPasswordMsg = res;
        // if (res['status'] == 200) {
        // }
      });
  }
}

enum EmailStatusEnum {
  unset,
  found,
  notFound,
}
