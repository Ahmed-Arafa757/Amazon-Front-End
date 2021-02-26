import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/_services/order.service';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css'],
})
export class UserOrdersComponent implements OnInit {
  orders = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getUserOrders('5ff8c51fa4c6cf417005fd48').subscribe({
      next: (responseData: any) => {
        this.orders = responseData.orders;
        console.log(this.orders);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
