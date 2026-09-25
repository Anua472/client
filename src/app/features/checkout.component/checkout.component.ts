import { Component } from '@angular/core';
import { OrderSummary } from '../../shared/components/order-summary/order-summary';
import {MatStepperModule} from '@angular/material/stepper';
@Component({
  selector: 'app-checkout.component',
  imports: [
    OrderSummary,
    MatStepperModule,
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {}
