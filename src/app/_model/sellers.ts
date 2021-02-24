import { Address } from './address';


export interface Seller{
    _id?: string;
    sellerName: string;
    name: { first: String, last: String };
    email: string;
    phone: String;
    category: string;
    address: Address;
    logoImg: String,
    shortDesc?: string;
    password: string;
    repeatedPassword:string;
    dateOfRegister: String,
     
}

