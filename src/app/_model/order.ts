import { OrderItem } from './orderItem';
import { OrderPrice } from './orderPrice';
import { ShippingAddress } from './shippingAddress';

export interface Order {
  _id?: string;
  orderItems?: [];
  orderPrice: string;
  orderDate: string;
  shippingAddress: object;
  orderStatus: string;
  customerId: string;

  // _id?:string;
  // orderItems?:OrderItem[];
  // orderPrice?:OrderPrice;
  // orderDate?:string;
  // shippingAddress?:ShippingAddress;
  // orderStatus?:string;
  // customerId?:string;     //CustomerId
}
