
export interface Order {
  _id?: string;
  orderItems?: [];
  orderPrice: string;
  orderDate: string;
  shippingAddress: object;
  orderStatus: string;
  customerId: string;
}
