import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../_model/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  orderFullDetails;
  orders: Order[];
  placedOrder = {};

  constructor(private http: HttpClient) {}

  getOrdersById(id: string) {
    let order = this.orders.find((p) => p._id === id);
    if (order !== undefined) {
      let prod: Order = {
        _id: order._id,
        orderItems: order.orderItems,
        orderPrice: order.orderPrice,
        orderDate: order.orderDate,
        shippingAddress: order.shippingAddress,
        orderStatus: order.orderStatus,
        customerId: order.customerId,
      };
      return prod;
    }
  }

  addOrder(order) {
    const newOrder: Order = {
      _id: order.orderData.orderID,
      orderItems: order.orderDetails.purchase_units[0].items,
      orderPrice: order.orderDetails.purchase_units[0].amount.value,
      orderDate: order.orderDetails.create_time,
      shippingAddress: order.userAddress,
      orderStatus: 'Pending',
      customerId: '5ff8c51fa4c6cf417005fd48',
    };

    this.http
      .post<{ message: string; orderID: string }>(
        'http://localhost:3000/api/order/add',
        newOrder
      )
      .subscribe((responseOrder) => {
        console.log(responseOrder);
      });
  }

  getUserOrders(
    id: string
  ): Observable<{
    message: string;
    orders: Order[];
  }> {
    return this.http.get<{ message: string; orders: Order[] }>(
      `http://localhost:3000/api/user-orders/${id}`
    );
  }
}
