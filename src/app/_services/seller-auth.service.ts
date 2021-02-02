import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Seller } from '../_model/sellers';
@Injectable({
  providedIn: 'root'
})
export class SellerAuthService {

  constructor(private httpClient:HttpClient) { }

  register(seller:Seller){
    console.log(seller);
     return seller;
    // return this.httpClient.post(`${this.baseUrl}user/register`,seller)
  }
  login(seller:Seller){
    console.log(seller);
    return {email:seller.email,password:seller.password} 
    // return this.httpClient.post(`${this.baseUrl}user/login`,{email:seller.email,password:seller.password})
  }
//   checkPassword(seller:Seller):Boolean{
     
//    let x= Boolean(seller.password !== seller.repeatedPassword) 
//    console.log(seller.password,seller.repeatedPassword,x);
//    return x
// }

isAuthenticated():boolean{
  if(localStorage.getItem('token')){
    return true;
  }else{
    return false;
  }
}
}
