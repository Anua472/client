import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { Product } from './../../../shared/models/product';
import { Component, inject, input, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { MatAnchor, MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../core/services/cart.service';
import { CdkAriaLive } from '../../../../../node_modules/@angular/cdk/types/_a11y-module-chunk';

@Component({
  selector: 'app-product-item',
  imports: [
    MatCard,
    MatCardContent,
    CurrencyPipe,
    MatCardActions,
    MatButton,
    MatIcon,
    RouterLink,
  
],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {
  @Input() product?: Product;
  cartService = inject(CartService);

}
