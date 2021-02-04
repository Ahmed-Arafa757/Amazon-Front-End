
import { SellerAuthService } from 'src/app/_services/seller-auth.service';
import { Component, OnInit } from '@angular/core';
import { Seller } from 'src/app/_model/sellers';


@Component({
  selector: 'app-seller-register',
  templateUrl: './seller-register.component.html',
  styleUrls: ['./seller-register.component.scss']
})
export class SellerRegisterComponent implements OnInit {
  seller:Seller
  body:any={repeatedPassword:""}
  constructor(private sellerAuthService:SellerAuthService) { }

  ngOnInit(): void {
  }
  onSubmit(data){
    console.log(data)
   const newSeller: Seller = {
    sellerName: data.name,
      // address: form.address,
      // shortDesc: form.shortDesc,
      // websiteURL: seller.websiteURL,
      email: data.email,
      password: data.password



   };
    this.sellerAuthService.register(newSeller);
   
    // this.sellerAuthService.login(this.seller).subscribe(
    //   (response)=>{
    //     localStorage.setItem('token',response['token']);
    //    console.log(response);
    //    this.router.navigate(['/product']);
    //   },
    //   (err)=>{console.log(err);
    //   },
    //   ()=>{}
    // )
  }  

  
  showPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
}
