import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./layout/header/header";
import { ShopComponent } from './features/shop/shop.component';




@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, Header, ShopComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App{

  title = signal('Skinet');

  }





