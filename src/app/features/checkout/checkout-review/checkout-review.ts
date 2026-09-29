import { Component, inject } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [
    CurrencyPipe
  ],
  selector: 'app-checkout-review',
  styleUrl: './checkout-review.css',
  templateUrl: './checkout-review.html',
})
export class CheckoutReview {
  cartService = inject(CartService);
}
