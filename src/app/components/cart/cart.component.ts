import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CartDataService } from '../../services/cart.data.service';
import { CartItem } from '../../model/cart.item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItemList: CartItem[];

  constructor(private cartDataService: CartDataService) { }

  ngOnInit() {
    this.getCartItemList();
  }

  getCartItemList(): void {
    this.cartItemList = this.cartDataService.getCartItemList();
  }


}
