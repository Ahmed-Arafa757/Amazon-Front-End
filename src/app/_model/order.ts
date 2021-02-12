import { OrderItem } from "./orderItem";
import { OrderPrice } from "./orderPrice";
import { ShippingAddress } from "./shippingAddress";

export interface Order{
    _id?:string;
    orderItems?:OrderItem[];
    orderPrice?:OrderPrice;
    orderDate?:string;
    shippingAddress?:ShippingAddress;
    orderStatus?:string;
    customerId?:string;     //CustomerId
}