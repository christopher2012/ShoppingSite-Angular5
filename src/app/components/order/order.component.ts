import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { OrderService } from '../../services/order.service';
import { CartItem } from '../../model/cart.item';
import { CartDataService } from '../../services/cart.data.service';
import { Order } from '../../model/order';
import { AuthenticateService } from '../../services/authenticate.service';

@Component({
  providers: [OrderService],
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  submitted = false;
  isReady = false;

  model = new Order('', '', '');

  constructor(private orderService: OrderService, private cartDataService: CartDataService,
    private autheticateService: AuthenticateService) { }

  ngOnInit(): void {
    if (localStorage.getItem('loggedUser') !== null) {
      console.log(localStorage.getItem('loggedUser'));
      this.model.address = JSON.parse(localStorage.getItem('loggedUser')).address.address;
      this.model.name = JSON.parse(localStorage.getItem('loggedUser')).address.name;
      this.model.surname = JSON.parse(localStorage.getItem('loggedUser')).address.surname;
      this.model.userid = JSON.parse(localStorage.getItem('loggedUser'))._id;
      this.model.cartDataToPolines(this.cartDataService.cartItemList);
      console.log(this.model.polines);
    }
    this.isReady = true;
  }

  onSubmit() {
    this.isReady = false;
    this.orderService.createAddress(this.model).subscribe(
      data => {
        console.log(data.json());
        this.model.addressid = data.json()._id;

        this.orderService.createPo(this.model).subscribe(
          orderData => {

            this.model.poid = orderData.json()._id;
            console.log(this.model.poid);

            this.orderService.createPolines(this.model).subscribe(
              polinesData => {
                console.log(polinesData.json());
                this.cartDataService.cartItemList = [];
              },
              err => {

              }
            );
          }
        );
      },
      err => console.log(err)
    );

    this.submitted = true;
    this.isReady = true;
  }
}
