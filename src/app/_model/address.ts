import { Location } from "./location";

export interface Address{
    postalCode?: number,
        street?: string,
        state?: string,
        city?: string,
        country?: string,
        geoMap?:Location
}
