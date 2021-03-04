import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Seller } from '../_model/sellers';
@Injectable({
  providedIn: 'root'
})
export class SellerAuthService {
  seller: Seller[] = []
    


  // baseUrl = 'https://iti-amzon-backend.herokuapp.com/';
   baseUrl = 'http://localhost:3000/'
  constructor(private httpClient: HttpClient) { }



  signInWithGoogle(socialUser){
    console.log(socialUser);
    return this.httpClient.post(`${this.baseUrl}api/seller/google`,socialUser)
  }
  signInWithFB(socialUser){
    console.log(socialUser);
    return this.httpClient.post(`${this.baseUrl}api/seller/facebook`,socialUser)
  }
  register(seller:Seller){
    console.log("register"+ seller);
   return this.httpClient.post(`${this.baseUrl}api/sellers/register`,seller)
  }
  login(seller:Seller){
    console.log(seller);
    return this.httpClient.post(`${this.baseUrl}api/sellers/login`,seller)
    // .subscribe(
    //   (seller)=>{console.log(seller)},
    //   ()=>{},
    //   ()=>{},
    //      )
  }

  

//   checkPassword(seller:Seller):Boolean{
     
//    let x= Boolean(seller.password !== seller.repeatedPassword) 
//    console.log(seller.password,seller.repeatedPassword,x);
//    return x
// }






// getSellerById(myid): Seller{

//   // return this.sellers.find(p => p.sellerId === myid); 

// }

isAuthenticated():boolean{
  if(localStorage.getItem('sellerLoginStorage')){
    return true;
  }else{
    return false;
  }
}
}
