import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ItemListComponent } from './item.list/item.list.component';
import { ItemComponent } from './item/item.component';
import { DataService } from './services/data.service';
import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { CategoryListComponent } from './category.list/category.list.component';
import { CategoryComponent } from './category/category.component';
import { SearchComponent } from './search/search.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PlnCurrencyPipe } from './pipes/pln.currency.pipe';
import { CategoryFilterPipe } from './pipes/category.filter.pipe';
import { AppRoutingModule } from './app.routing.module';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart.item/cart.item.component';
import { CartItemListComponent } from './cart.item.list/cart.item.list.component';
import { OrderComponent } from './order/order.component';
import { PriceComponent } from './price/price.component';

import {HttpClientModule} from '@angular/common/http';

import { NouisliderModule } from 'ng2-nouislider';

@NgModule({
  declarations: [
    ItemListComponent,
    ItemComponent,
    AppComponent,
    ShopComponent,
    CategoryListComponent,
    CategoryComponent,
    SearchComponent,
    PlnCurrencyPipe,
    CategoryFilterPipe,
    CartComponent,
    CartItemComponent,
    CartItemListComponent,
    OrderComponent,
    PriceComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
