import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Seller } from '../_model/sellers';
@Injectable({
  providedIn: 'root'
})
export class SellerAuthService {
  sellers: Seller[] = []
    


  baseUrl = 'https://mearn-stack-backend-test.herokuapp.com/';
  constructor(private httpClient: HttpClient) { }




  register(seller:Seller){
    console.log(seller);
   return this.httpClient.post(`${this.baseUrl}seller/register`,seller)
  }
  login(seller:Seller){
    console.log(seller);
    
    return this.httpClient.post(`${this.baseUrl}seller/login`,{email:seller.email,password:seller.password})
  }
//   checkPassword(seller:Seller):Boolean{
     
//    let x= Boolean(seller.password !== seller.repeatedPassword) 
//    console.log(seller.password,seller.repeatedPassword,x);
//    return x
// }

getSellerByEmail(email): Seller {

  return this.sellers.find(p => p.email === email);

}

getSellerById(myid): Seller{

  // return this.sellers.find(p => p.sellerId === myid); 

}

isAuthenticated():boolean{
  if(localStorage.getItem('token')){
    return true;
  }else{
    return false;
  }
}
}
