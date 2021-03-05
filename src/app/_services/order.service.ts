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
        orderHandling: order.orderHandling,
        orderShipping: order.orderShipping,
        orderTax: order.orderTax,
        orderDate: order.orderDate,
        shippingAddress: order.shippingAddress,
        orderStatus: order.orderStatus,
        customerId: order.customerId,
        deliveryDate: order.deliveryDate,
      };
      return prod;
    }
  }

  addOrder(order) {
    const orderDate = new Date(order.orderDetails.create_time).toUTCString();
    const shippingDate = new Date();
    shippingDate.setDate(shippingDate.getDate() + 7);
    const newOrder: Order = {
      _id: order.orderData.orderID,
      orderItems: order.orderDetails.purchase_units[0].items,
      orderPrice: order.orderDetails.purchase_units[0].amount.value,
      orderHandling: order.handling,
      orderShipping: order.shipping,
      orderTax: order.tax,
      orderDate: orderDate,
      shippingAddress: order.userAddress,
      orderStatus: 'Pending',
      customerId: order.userID,
      deliveryDate: shippingDate.toUTCString().split(' ').slice(0, 4).join(' '),
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

  cancelUserOrder(id: string, order: Order): Observable<Order> {
    return this.http.put<Order>(`http://localhost:3000/api/order/${id}`, order);
  }
}
