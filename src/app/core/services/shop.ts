import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Pagination } from '../../shared/models/pagination';
import { Product } from '../../shared/models/product';

@Injectable({
  providedIn: 'root',
})
export class Shop {
  baseUrl ='http://localhost:5001/api/'
  private http = inject(HttpClient);

  getProducts(){
    return this.http.get<Product[]>(this.baseUrl+'products');
  }
}
