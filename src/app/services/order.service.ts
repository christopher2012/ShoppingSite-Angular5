import { Injectable } from '@angular/core';

import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Order } from '../model/order';


@Injectable()
export class OrderService {

  private addressUrl = 'http://localhost:8080/api/address';
  private poUrl = 'http://localhost:8080/api/po';
  private polinesUrl = 'http://localhost:8080/api/polines';

  constructor(private http: Http) { }

  createAddress(order: Order) {
    const header = new Headers({'Content-Type': 'application/json'});

    return this.http.post(this.addressUrl,
      {name: order.name, surname: order.surname, address: order.address}, { headers: header });
  }

  createPo(order: Order) {
    const header = new Headers({'Content-Type': 'application/json'});

    return this.http.post(this.poUrl,
      {user: order.userid, address: order.addressid, status: order.status}, { headers: header });
  }

  createPolines(order: Order) {
    const header = new Headers({'Content-Type': 'application/json'});
    for (const poline of order.polines) {
      poline.poid = order.poid;
    }
    console.log(order.polines);
    return this.http.post(this.polinesUrl,
      order.polines, { headers: header });
  }
}
