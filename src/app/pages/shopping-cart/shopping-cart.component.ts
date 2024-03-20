import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductsService } from '../../core/services/products.service';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    NzRateModule,
    FormsModule,
    UpperCasePipe,
    NzButtonModule,
    NzSelectModule,
  ],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
})
export class ShoppingCartComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
