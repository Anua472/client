import { Component, inject, OnInit, signal } from '@angular/core';
import { Product } from '../../../shared/models/product';
import { ShopService } from '../../../core/services/shop.service';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { MatAnchor, MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatLabel } from '@angular/material/select';
import { MatInput } from '@angular/material/input';
import { MatDivider } from '@angular/material/divider';
import { CartService } from '../../../core/services/cart.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-product-details',
  imports: [
    CurrencyPipe,
    MatButton,
    MatIcon,
    MatFormField,
    MatInput,
    MatLabel,
    MatDivider,
    FormsModule
  ],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit{
  private ShopService = inject(ShopService);
  private activatedRoute = inject(ActivatedRoute);
  cartService = inject(CartService);
  product = signal<Product | undefined>(undefined);
  quantityInCart = 0;
  quantity = 1;

  ngOnInit(): void {
    this.loadProduct();

  }

  loadProduct(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(!id) return;
    this.ShopService.getProduct(+id).subscribe({
      next: product => {
        this.product.set(product);
        this.updateQuantityInCart();
      },
      error: error => console.log(error)
    })
    }

    updateCart(){
      const product = this.product();
      if (!product) return;
      if (this.quantity > this.quantityInCart){
        const itemToAdd = this.quantity - this.quantityInCart;
        this.quantityInCart += itemToAdd;
        this.cartService.addItemToCart(product, itemToAdd);

      } else {
        const itemToRemove = this.quantityInCart -this.quantity;
        this.quantityInCart -= itemToRemove;
        this.cartService.removeItemFromCart(product.id, itemToRemove)
      }
    }

    updateQuantityInCart(){
      this.quantityInCart = this.cartService.cart()?.items.find(x => x.productId === this.product()?.id)?.quantity || 0;
      this.quantity = this.quantityInCart || 1;
    }

    getButtonText(){
      return this.quantityInCart > 0 ? 'Update cart' : 'Add to cart'
    }
}



