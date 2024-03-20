import { Component, Input, OnInit } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzRateModule } from 'ng-zorro-antd/rate';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NzRateModule, FormsModule, UpperCasePipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  @Input() product: any;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {}
}
