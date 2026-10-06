import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { Product } from './../../../shared/models/product';
import { Component, inject, input, Input, ChangeDetectionStrategy } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { MatAnchor, MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../core/services/cart.service';


@Component({
  selector: 'app-product-item',
  imports: [MatCard, MatCardContent, CurrencyPipe, MatCardActions, MatButton, MatIcon, RouterLink],
  templateUrl: './product-item.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './product-item.css',
})
export class ProductItem {
  @Input() product?: Product;
  cartService = inject(CartService);
}
