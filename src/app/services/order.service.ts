import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Order } from '../model/order';


@Injectable()
export class OrderService {

  private categoriesUrl = 'http://localhost:2403/orders';

    constructor(private http: Http) { }

    order(order: Order): Observable<any> {
      console.log(order.toJson());
      return this.http.post(this.categoriesUrl, order.toJson());
    }

}
