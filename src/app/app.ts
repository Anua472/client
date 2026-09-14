import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./layout/header/header";
import { Product} from './shared/models/product';
import { Pagination} from './shared/models/pagination';
import { Shop } from './core/services/shop';



@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App{
  private shopService = inject(Shop)
  title = 'Skinet';
  products= signal<Product[]>([]);


  ngOnInit(): void {
    this.shopService.getProducts().subscribe((data)=>{
      this.products.set(data)
    })




  }


}


