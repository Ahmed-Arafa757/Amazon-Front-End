export interface warehouse {
  _id?: string;
  name: string;
  location: string;
  totalOrders: number;
  totalProducts: number;
  isFull: boolean;
}
