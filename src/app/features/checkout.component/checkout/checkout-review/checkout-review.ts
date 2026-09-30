import { Component, inject, Input } from '@angular/core';
import { CartService } from '../../../../core/services/cart.service';
import { CurrencyPipe } from '@angular/common';
import { ConfirmationToken } from '@stripe/stripe-js';
import { AddressPipe } from '../../../../shared/pipes/address-pipe';
import { PaymentCardPipe } from '../../../../shared/pipes/payment-card-pipe';

@Component({
  imports: [CurrencyPipe, AddressPipe, PaymentCardPipe],
  selector: 'app-checkout-review',
  styleUrl: './checkout-review.css',
  templateUrl: './checkout-review.html',
})
export class CheckoutReview {
  cartService = inject(CartService);
  @Input() confirmationToken?: ConfirmationToken;
}
