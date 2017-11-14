import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-item-list',
  templateUrl: './cart.item.list.component.html',
  styleUrls: ['./cart.item.list.component.css']
})
export class CartItemListComponent implements OnInit {

  @Input() cartItemList: any[];

  constructor() { }

  ngOnInit() {
  }

}
