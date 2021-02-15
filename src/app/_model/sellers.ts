import { Address } from './address';


export interface Seller{
    _id?: string;
    sellerName?: string;
    sellerId?: string;
    category?: string;
    address?: Address;
    logo?: string;
    shortDesc?: string;
    websiteURL?: string; 
    email?: string;
    password?: string;
    repeatedPassword?:string
}

/*

 location?: {
     latitude?: number;
    longitude?: number;
};

*/
