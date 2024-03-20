import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderbarComponent } from './core/components/headerbar/headerbar.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderbarComponent, ProductsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ecommerce';
}
