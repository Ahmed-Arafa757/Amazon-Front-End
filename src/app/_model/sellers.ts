import { Location } from './location';

export interface Seller{
    _id?: string;
    sellerName?: string;
    sellerId?: string;
    category?: string;
    location?: Location;
    logo?: string;
    shortDesc?: string;
    websiteURL?: string;

}

/*

 location?: {
     latitude?: number;
    longitude?: number;
};

*/
