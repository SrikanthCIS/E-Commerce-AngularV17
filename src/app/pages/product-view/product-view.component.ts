import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductsService } from '../../core/services/products.service';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    NzRateModule,
    FormsModule,
    UpperCasePipe,
    NzButtonModule,
  ],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.scss',
})
export class ProductViewComponent implements OnInit {
  productId!: string;
  product: any;

  constructor(
    private route: ActivatedRoute,
    private _productsService: ProductsService
  ) {
    this.route.params.subscribe((p: any) => {
      if (p['pid']) {
        this.productId = p['pid'];
        this.getProductById(this.productId);
      }
    });
  }

  ngOnInit(): void {}

  async getProductById(id: string) {
    this.product = await this._productsService.getProductById(id);
    console.log('--Product:', this.product);
  }
}
