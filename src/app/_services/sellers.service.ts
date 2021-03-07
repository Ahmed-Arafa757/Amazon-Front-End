import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Seller } from '../_model/sellers';

@Injectable({
  providedIn: 'root',
})
export class SellersService {
  sellers: Seller[] = [];
  baseUrl = 'https://iti-amzon-backend.herokuapp.com/';
  /* baseUrl = 'http://localhost:3000/'; */
  constructor(private httpClinet: HttpClient) {}

  getAllSellers() {
    return this.httpClinet.get(this.baseUrl + 'api/sellers');
  }
  getSellerById(id) {
    return this.httpClinet.get(this.baseUrl + 'api/sellers/id/' + id);
  }
  getProductBySeller(id) {
    return this.httpClinet.get(this.baseUrl + 'api/seller/products/' + id);
  }

}
