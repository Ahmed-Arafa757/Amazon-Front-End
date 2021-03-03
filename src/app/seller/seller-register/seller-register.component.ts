
import { SellerAuthService } from 'src/app/_services/seller-auth.service';
import { Component, OnInit } from '@angular/core';
import { Seller } from 'src/app/_model/sellers';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-seller-register',
  templateUrl: './seller-register.component.html',
  styleUrls: ['./seller-register.component.scss']
})
export class SellerRegisterComponent implements OnInit {
  seller:Seller={sellerName:'' , email: '', password: '', repeatedPassword: '', phone:'' };
  errors = '';
  constructor(
    private sellerAuthService:SellerAuthService, 
    private router: Router,
    private activatedRoute:ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.seller.sellerName = params.name;
      this.seller.email = params.email;
      this.seller.provider = params.provider;
    });
    if(this.seller.provider === undefined)
    {
      this.seller.provider = '';
    }
  
  }

  onRegister() {
    
    this.sellerAuthService.register(this.seller).subscribe(
      (res) => {
        console.log(res); 
        
        this.router.navigate(['seller/home'], {
          queryParams: { sellerName: this.seller.sellerName, email: this.seller.email },
        });
      },
      (err) => {
        this.errors = err.error.err;
        console.log(err);
      },
      () => { },
    );
  }


  showPassword() {

    var x = document.getElementById("password") as HTMLInputElement;

    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
}
