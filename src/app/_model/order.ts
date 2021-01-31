import { OrderItem } from "./orderItem";
import { OrderPrice } from "./orderPrice";
import { ShippingAddress } from "./shippingAddress";

export interface Order{
    _id?:string;
    orderItems?:OrderItem[];
    orderPrice?:OrderPrice;
    orderDate?:Date;
    shippingAddress?:ShippingAddress;
    orderStatus?:string;
    customerId?:string;     //CustomerId
}