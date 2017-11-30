import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from '../../model/cart.item';

@Component({
  selector: 'app-cart-item-list',
  templateUrl: './cart.item.list.component.html',
  styleUrls: ['./cart.item.list.component.css']
})
export class CartItemListComponent implements OnInit {

  @Input() cartItemList: CartItem[];

  constructor() { }

  ngOnInit() {
  }

  onDelete(cartItem: CartItem) {
    this.cartItemList.splice(this.cartItemList.indexOf(cartItem), 1);

    localStorage.setItem('shopCart', JSON.stringify(this.cartItemList));
  }

  onPlus(cartItem: CartItem) {
    const index = this.cartItemList.indexOf(cartItem);
    if (index > -1) {
      this.cartItemList[index].count ++;
    }

    localStorage.setItem('shopCart', JSON.stringify(this.cartItemList));
  }

  onMinus(cartItem: CartItem) {
    const index = this.cartItemList.indexOf(cartItem);
    if (index > -1) {
      this.cartItemList[index].count --;
    }

    localStorage.setItem('shopCart', JSON.stringify(this.cartItemList));
  }
}
