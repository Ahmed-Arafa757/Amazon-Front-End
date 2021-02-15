import { SellerAuthService } from 'src/app/_services/seller-auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SellerAuthGuardService implements CanActivate {

  constructor(private sellerAuthService:SellerAuthService) { }
  canActivate() {
    return this.sellerAuthService.isAuthenticated(); 
  }  
}
