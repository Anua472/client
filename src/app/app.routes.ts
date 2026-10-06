import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { ShopComponent } from './features/shop/shop.component';
import { ProductDetails } from './features/shop/product-details/product-details';
import { TestError } from './features/test-error/test-error';
import { NotFound } from './shared/components/not-found/not-found';
import { ServerError } from './shared/components/server-error/server-error';
import { CartComponent } from './features/cart/cart.component';
import { CheckoutComponent } from './features/checkout.component/checkout.component';
import { Login } from './features/account/login/login';
import { Register } from './features/account/register/register';
import { authGuard } from './core/guards/auth.guard';
import { emptyCartGuard } from './core/guards/empty-cart.guard';
import { CheckoutSuccess } from './features/checkout.component/checkout/checkout-success/checkout-success';
import { OrderComponent } from './features/orders/order.component';
import { OrderDetailedComponent } from './features/orders/order-detailed.component/order-detailed.component';
import { orderCompleteGuard } from './core/guards/order-complete-guard';

export const routes: Routes = [

  { path: '',component: Home },
  { path: 'shop',component: ShopComponent },
  { path: 'shop/:id',component: ProductDetails },
  { path: 'cart',component: CartComponent },
  { path: 'checkout',component: CheckoutComponent, canActivate: [authGuard, emptyCartGuard] },
  { path: 'checkout/success',component: CheckoutSuccess,
      canActivate: [authGuard, orderCompleteGuard]},
  { path: 'orders',component: OrderComponent, canActivate: [authGuard] },
  { path: 'orders/:id',component: OrderDetailedComponent, canActivate: [authGuard] },
  { path: 'account/login',component: Login },
  { path: 'account/register',component: Register },
  { path: 'test-error',component: TestError },
  { path: 'not-found',component: NotFound },
  { path: 'server-error',component: ServerError },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];
