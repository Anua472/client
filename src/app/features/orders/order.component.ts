import { Component, inject, OnInit, signal } from '@angular/core';
import { OrderService } from '../../core/services/order.service';
import { Order } from '../../shared/models/order';
import { RouterLink } from '@angular/router';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  imports: [
    RouterLink,
    DatePipe,
    CurrencyPipe
  ],
  selector: 'app-order.component',
  styleUrl: './order.component.css',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {

  private orderService = inject(OrderService);
  orders = signal<Order[]>([]);

  ngOnInit(): void {
    this.orderService.getOrdersForUser().subscribe({

      next: orders => this.orders.set(orders)
    })
  }


}
