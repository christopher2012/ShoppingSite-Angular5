import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { CartItem } from '../../model/cart.item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart.item.component.html',
  styleUrls: ['./cart.item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem;

  @Output() onDelete = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit() {
  }

  delete(event) {
    this.onDelete.emit(this.cartItem);
  }
}
