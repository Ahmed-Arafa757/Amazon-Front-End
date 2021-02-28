import { Address } from './address';


export interface Seller{
    // _id?: String;
    sellerName?: String;
    name?: { first: String, last: String };
    email?: String;
    phone?: String;
    category?: String;
    address?: Address;
    logoImg?: String;
    shortDesc?: String;
    password?: String;
    repeatedPassword?:String;
    dateOfRegister?: String;
    provider?: String;
}

