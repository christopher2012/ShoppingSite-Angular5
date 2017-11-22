import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartDataService } from './services/cart.data.service';
import { AuthenticateService } from './services/authenticate.service';

@Component({
  providers: [CartDataService],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit {
  shopCart: any[];

  constructor(private cartDataService: CartDataService, private authenticateService: AuthenticateService) { }

  ngOnDestroy() {
    console.log('on Destroy...');
  }

  ngOnInit() {
    console.log(this.authenticateService.isLogged);
  }
}
