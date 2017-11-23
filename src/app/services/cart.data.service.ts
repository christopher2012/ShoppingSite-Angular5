import { Injectable } from '@angular/core';
import { items } from '../../assets/data/item.data.1';
import { Item } from '../model/item';
import { CartItem } from '../model/cart.item';

@Injectable()
export class CartDataService {

  cartItemList = [];
  constructor() {
    for ( const item of items) {
      this.cartItemList.push(new CartItem(new Item(item.name, item.desc, item.category, item.price, item.count), 1));
    }
   }

  addItemToCart(item: Item): void {
    let itemFound = false;
    for (const itemTemp of this.cartItemList) {
      if (itemTemp.item === item) {
        itemTemp.count ++;
        itemFound = true;
        break;
      }
    }
    if (!itemFound) {
      this.cartItemList.push(new CartItem(item, 1));
    }
  }


  getCartItemList() {
      return this.cartItemList;
  }

}
