export interface ShippingAddress{
    postalCode?:number;
    country?:string;
    city?: string;
    state?: string;
    street?: string;
    buildingNumber?: number;
    flatNumber?: number;
    floorNumber?: number;
    latitude?: number;
    longitude?: number;
}