import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ItemListComponent } from './components/item.list/item.list.component';
import { ItemComponent } from './components/item/item.component';
import { DataService } from './services/data.service';
import { AppComponent } from './app.component';
import { ShopComponent } from './components/shop/shop.component';
import { CategoryListComponent } from './components/category.list/category.list.component';
import { CategoryComponent } from './components/category/category.component';
import { SearchComponent } from './components/search/search.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PlnCurrencyPipe } from './pipes/pln.currency.pipe';
import { CategoryFilterPipe } from './pipes/category.filter.pipe';
import { AppRoutingModule } from './app.routing.module';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart.item/cart.item.component';
import { CartItemListComponent } from './components/cart.item.list/cart.item.list.component';
import { OrderComponent } from './components/order/order.component';
import { PriceComponent } from './components/price/price.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { NouisliderModule } from 'ng2-nouislider';
import { AdminComponent } from './components/admin/admin.component';
import { SearchFilterPipe } from './pipes/search.filter.pipe';

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
    PriceComponent,
    AdminComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
