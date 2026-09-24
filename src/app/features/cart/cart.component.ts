import { Component, inject } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { CartItemComponent } from './cart-item/cart-item.component';
import { OrderSummary } from '../../shared/components/order-summary/order-summary';
import { EmptyState } from '../../shared/components/empty-state/empty-state';
@Component({
  selector: 'app-cart.component',
  imports: [CartItemComponent, OrderSummary, EmptyState],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartService = inject(CartService);

}
