import { Injectable} from '@angular/core';
import { items } from '../../assets/data/item.data.1';
import { Item } from '../model/item';
import { CartItem } from '../model/cart.item';

@Injectable()
export class CartDataService {

  cartItemList = [];
  constructor() {
      if (localStorage.getItem('shopCart') != null) {
        this.cartItemList = JSON.parse(localStorage.getItem('shopCart'));
      }
   }

  addItemToCart(item): void {
    let itemFound = false;
    for (const itemTemp of this.cartItemList) {
      if (itemTemp.item._id === item._id) {
        itemTemp.count ++;
        itemFound = true;
        break;
      }
    }
    if (!itemFound) {
      this.cartItemList.push(new CartItem(item, 1));
    }
    localStorage.setItem('shopCart', JSON.stringify(this.cartItemList));
  }


  getCartItemList() {
      return this.cartItemList;
  }
}
