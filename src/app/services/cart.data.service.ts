import { Injectable } from '@angular/core';
import { items } from '../../assets/data/item.data.1';
import { Item } from '../model/item';

@Injectable()
export class CartDataService {

  cartItemList = [];
  constructor() {
    for ( const item of items) {
      this.cartItemList.push(new Item(item.name, item.desc, item.category, item.price, item.count));
    }
    console.log('cart data service constructor');
   }

  addItemToCart(item: Item): void {
    this.cartItemList.push(item);
  }


  getCartItemList() {
      return this.cartItemList;
  }

}
