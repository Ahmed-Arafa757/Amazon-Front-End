import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/_model/order';
import { OrderService } from 'src/app/_services/order.service';
import { UsersService } from 'src/app/_services/users.service';

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
  displayedOrders;
  constructor(
    private usersService: UsersService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    const userID = localStorage.getItem('user id');
    this.usersService.getUserById(userID).subscribe({
      next: (user: any) => {
        this.orderService.getUserOrders(user._id).subscribe({
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
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  cancelUserOrder(order) {
    
    order.orderStatus = 'Cancelled';
    this.orderService.cancelUserOrder(order._id, order).subscribe({
      next: (responseDate: any) => {
        this.currentOrders.splice(this.currentOrders.indexOf(order), 1);
        this.allOrders.splice(this.allOrders.indexOf(order), 1);

        this.cancelledOrders.push(JSON.parse(JSON.stringify(responseDate)));
        this.allOrders.push(JSON.parse(JSON.stringify(responseDate)));
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  switchOrders(orders) {
   
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
