import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ShopComponent } from './shop/shop.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'shop', component: ShopComponent },
  { path: '', component: ShopComponent, pathMatch: 'full' },
  { path: 'order', component: OrderComponent }
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
