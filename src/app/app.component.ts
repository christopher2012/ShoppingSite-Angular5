import { Component } from '@angular/core';
import { CartDataService } from './services/cart.data.service';

@Component({
  providers: [CartDataService],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  shopCart: any[];

  constructor(private cartDataService: CartDataService) { }

}
