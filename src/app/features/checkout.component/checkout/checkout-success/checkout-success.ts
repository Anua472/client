import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  imports: [
    MatButton,
    RouterLink,
  ],
  selector: 'app-checkout-success',
  styleUrl: './checkout-success.css',
  templateUrl: './checkout-success.html',
})
export class CheckoutSuccess {}
