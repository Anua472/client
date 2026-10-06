import { Component, inject, OnInit, signal } from '@angular/core';
import { OrderService } from '../../../core/services/order.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Order } from '../../../shared/models/order';
import { MatCardModule } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { AddressPipe } from '../../../shared/pipes/address-pipe';
import { PaymentCardPipe } from '../../../shared/pipes/payment-card-pipe';

@Component({
  imports: [
    MatCardModule,
    MatButton,
    DatePipe,
    CurrencyPipe,
    AddressPipe,
    PaymentCardPipe,
    RouterLink
],
  selector: 'app-order-detailed.component',
  styleUrl: './order-detailed.component.css',
  templateUrl: './order-detailed.component.html',
})
export class OrderDetailedComponent implements OnInit {

  private orderService = inject(OrderService);
  private acivateRoute = inject(ActivatedRoute);
  order = signal<Order | undefined>(undefined);

  ngOnInit(): void {
    this.loadOrder();
  }
  loadOrder(){
    const id = this.acivateRoute.snapshot.paramMap.get('id');
    if (!id) return;
    this.orderService.getOrderDetailed(+id).subscribe({
      next: order => this.order.set(order)
    })
  }

}
