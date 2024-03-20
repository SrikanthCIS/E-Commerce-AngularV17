import { Component, OnInit } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { ProductsService } from '../../core/services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductsComponent, CommonModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent implements OnInit {
  products: any = [];
  constructor(private _productService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  async getProducts() {
    this.products = await this._productService.getAllProducts();
    console.log('--Products:', this.products[0]);
  }
}
