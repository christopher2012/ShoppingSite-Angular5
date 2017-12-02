import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [DataService]
})
export class AdminComponent implements OnInit {

  simpleDrop: any = null;
  productList = [];
  promoProductList = [];
  time = 20;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getMessage().subscribe(message => {
      this.productList = [];
      this.promoProductList = [];
      this.reloadProducts();
    });
    this.reloadProducts();
  }

  reloadProducts() {
    this.dataService.getItemListOb().subscribe(
      data => {
        for (const temp of data) {
          if (temp.promotion) {
            this.promoProductList.push(temp);
          } else {
            this.productList.push(temp);
          }
        }
      }
    );
  }

  refresh(type: string) {
    console.log(this.time);
    console.log(type);
    this.dataService.createPromo(this.promoProductList).subscribe(
      data => {
        console.log(data);
        this.dataService.sendPromoMessage(type, this.time);
      }
    );
  }

  delete(type: string) {
    console.log(this.time);
    console.log(type);
    this.dataService.deletePromo().subscribe(
      data => {
        this.dataService.sendPromoMessage(type, this.time);

      }
    );
  }

  addToPromo(event) {
    console.log(event);
    for (const product of this.productList) {
      if (event.dragData._id === product._id) {
        this.promoProductList.push(product);
        this.productList.splice(this.productList.indexOf(product), 1);
      }
    }
  }

  promoAdded(event) {
    console.log(event);
  }
}
