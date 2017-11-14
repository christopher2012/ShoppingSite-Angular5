import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ShopComponent } from './components/shop/shop.component';
import { OrderComponent } from './components/order/order.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'shop', component: ShopComponent },
  { path: '', component: ShopComponent, pathMatch: 'full' },
  { path: 'order', component: OrderComponent },
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
