import { Component, OnInit } from '@angular/core';
import { CartDataService } from '../../services/cart.data.service';

@Component({
  providers: [ CartDataService ],
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItemList: any[];
  constructor(private cartDataService: CartDataService) { }

  ngOnInit() {
    this.getCartItemList();
  }

  getCartItemList(): void {
    this.cartItemList = this.cartDataService.getCartItemList();
  }

}
