import { Injectable } from '@angular/core';
import { items } from '../../assets/data/item.data.1';

@Injectable()
export class CartDataService {

  cartItemList = items;
  constructor() { }


  getCartItemList() {

      return items;
  }

}
