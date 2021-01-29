import { Date } from './date'

export interface Advertisement {
    _id?: string;
    companyName?: string;
    AdTitle?: string;
    AdDescription?: string;
    date?: Date;
    websiteUrl?: string;
    img?: string;
}
    

/* date?:{
       publishedDate?: string;
    expirationDate?: string;
}; */