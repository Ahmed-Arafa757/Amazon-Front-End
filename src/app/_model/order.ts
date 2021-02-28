export interface Order {
  _id?: string;
  orderItems?: [];
  orderPrice: string;
  orderHandling: string;
  orderShipping: string;
  orderTax: string;
  orderDate: string;
  shippingAddress: object;
  orderStatus: string;
  customerId: string;
}
