import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/_model/order';
import { OrderService } from 'src/app/_services/order.service';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css'],
})
export class UserOrdersComponent implements OnInit {
  allOrders: Order[] = [];
  currentOrders: Order[] = [];
  previousOrders: Order[] = [];
  cancelledOrders: Order[] = [];
  displayedOrders: Order[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getUserOrders('5ff8c51fa4c6cf417005fd48').subscribe({
      next: (responseData: any) => {
        this.allOrders = responseData.orders;
        this.displayedOrders = this.allOrders;

        for (let index = 0; index < this.allOrders.length; index++) {
          if (this.allOrders[index].orderStatus === 'Pending') {
            this.currentOrders.push(
              JSON.parse(JSON.stringify(this.allOrders[index]))
            );
          } else if (this.allOrders[index].orderStatus === 'Completed') {
            this.previousOrders.push(
              JSON.parse(JSON.stringify(this.allOrders[index]))
            );
          } else if (this.allOrders[index].orderStatus === 'Cancelled') {
            this.cancelledOrders.push(
              JSON.parse(JSON.stringify(this.allOrders[index]))
            );
          }
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  switchOrders(orders) {
    console.log(orders.name);
    if (orders.name === 'allOrders') {
      this.displayedOrders = this.allOrders;
    } else if (orders.name === 'currentOrders') {
      this.displayedOrders = this.currentOrders;
    } else if (orders.name === 'previousOrders') {
      this.displayedOrders = this.previousOrders;
    } else if (orders.name === 'cancelledOrders') {
      this.displayedOrders = this.cancelledOrders;
    }
  }
}
