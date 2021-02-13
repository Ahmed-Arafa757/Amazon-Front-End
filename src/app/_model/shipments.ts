

import { Location } from "./location"

export interface Shipments{
    _id: string;
    userID:string;
    ordersID: string[];
    deliveryFees: number;
    totalPrice:number;
    shipmentAddress: {
        postalCode: number,
        street: string,
        state: string,
        city: string,
        country: string,
        geoMap:Location  
    }
    deliveryDate: string;
    paymentMethod:string;
    shippingCompany:string;
   

}

