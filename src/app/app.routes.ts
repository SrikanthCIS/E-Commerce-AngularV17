import { Routes } from '@angular/router';
import { ProductViewComponent } from './pages/product-view/product-view.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    component: ProductsListComponent,
  },
  {
    path: 'product-view/:pid',
    component: ProductViewComponent,
  },
  {
    path: 'cart',
    component: ShoppingCartComponent,
  },
];
