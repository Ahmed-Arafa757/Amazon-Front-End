import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Seller } from '../_model/sellers';

@Injectable({
    providedIn: 'root',
  })
export class SellersService {
     sellers: Seller [] = [];
  baseUrl = 'https://iti-amzon-backend.herokuapp.com/';
  /* baseUrl = 'http://localhost:3000/'; */
    constructor(private httpClinet:HttpClient) { } 

    getAllSellers() {

        return this.httpClinet.get(this.baseUrl + 'api/sellers')
    }
    getSellerById(id) {
        return this.httpClinet.get(this.baseUrl +'api/sellers/id/'+ id);
    }
    getProductBySeller(id){
        return this.httpClinet.get(this.baseUrl +'api/seller/products/'+ id);
    }
    /* getSellerById(id): Seller {

        return this.sellers.find(p => p._id === id);

    }

    addSeller(seller: Seller) {

        const newSeller: Seller = {
            _id: seller._id,
            sellerName: seller.sellerName,
            sellerId: seller.sellerId,
            category: seller.category,
            address: seller.address,
            logo: seller.logo,
            shortDesc: seller.shortDesc,
            websiteURL: seller.websiteURL,
            email: seller.email,
            password: seller.password

        };
        this.sellers.push(newSeller);
        // console.log(this.sellers);
    }

    updateSeller(seller: Seller): void {
        const index = this.sellers.findIndex((p) => p._id === seller._id);
        this.sellers[index] = {
            _id: seller._id,
            sellerName: seller.sellerName,
            sellerId: seller.sellerId,
            category: seller.category,
            address: seller.address,
            logo: seller.logo,
            shortDesc: seller.shortDesc,
            websiteURL: seller.websiteURL,
            email: seller.email,
            password: seller.password
        };
    }

    deleteSeller(id: string) {
        const index = this.sellers.findIndex((p) => p._id === id);
        this.sellers.splice(index, 1);
    } */
}
