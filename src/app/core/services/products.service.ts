import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  async getAllProducts() {
    const url = 'https://fakestoreapi.com/products';
    return await firstValueFrom(this.http.get<Product>(url));
  }

  async getProductById(id: string) {
    const url = `https://fakestoreapi.com/products/${id}`;
    return await firstValueFrom(this.http.get<Product>(url));
  }
}
