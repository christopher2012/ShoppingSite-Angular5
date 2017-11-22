import { Component, OnDestroy } from '@angular/core';
import { CartDataService } from './services/cart.data.service';

@Component({
  providers: [CartDataService],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  shopCart: any[];

  constructor(private cartDataService: CartDataService) { }

  ngOnDestroy() {
    console.log("on Destroy...");
  }
}
