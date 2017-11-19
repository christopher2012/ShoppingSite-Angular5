import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { OrderService } from '../../services/order.service';
import { CartItem } from '../../model/cart.item';
import { CartDataService } from '../../services/cart.data.service';
import { Order } from '../../model/order';

@Component({
  providers: [OrderService],
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  name: string;
  city: string;
  street: string;

  constructor(private orderService: OrderService, private cartDataService: CartDataService) { }

  ngOnInit() {
  }

  order(event) {
    this.orderService.order(new Order(this.name, this.city, this.street, this.cartDataService.cartItemList)).subscribe(
      response => console.log(response));
  }
}
