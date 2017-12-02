import { Injectable, OnDestroy } from '@angular/core';
import { items } from '../../assets/data/item.data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Category } from '../model/category';
import * as io from 'socket.io-client';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService implements OnDestroy {
    itemList = items;

    private itemsUrl = 'http://localhost:8080/api/products';
    private promoUrl = 'http://localhost:8080/api/products/promo';
    private promoDeleteUrl = 'http://localhost:8080/api/products/promo_del';
    private categoriesUrl = 'http://localhost:8080/api/categories';
    private socket;
    private connection;

    constructor(private http: Http, private httpClient: HttpClient) {
        this.connection = this.getMessage().subscribe();
    }

    getItemListOb(): Observable<any[]> {
        return this.httpClient.get<any[]>(this.itemsUrl);
    }

    getItemListLocal(): Observable<any[]> {
        return this.httpClient.get<any[]>(this.itemsUrl);
    }

    getItemList(): any[] {
        return items;
    }

    getCategoryListOb(): Observable<Category[]> {
        return this.http.get(this.categoriesUrl)
            .map(res => res.json()
            .map(category => new Category(category.name))
        );
    }

    getMessage() {
        const observable = new Observable(observer => {
            this.socket = io('http://localhost:8080');
            this.socket.on('message', (message) => {
                observer.next(message.data);
            });
            return () => {
                this.socket.disconnect();
            };
        });

        return observable;
    }

    sendMessage(type: string) {
        console.log('sending message... ' + type);
        this.socket.emit('refresh', type);
    }

    sendPromoMessage(type: string, time: number) {
        console.log('sending message... ' + type);
        this.socket.emit('refresh', {type: type, time: time});
    }

    createPromo(products) {
        const header = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.promoUrl, products, { headers: header });
    }

    deletePromo() {
        const header = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.promoDeleteUrl, {}, { headers: header });
    }

    getCategoryList() {
        return ['Kategoria 1', 'Kategoria 2', 'Kategoria 3', 'Kategoria 4'];
    }

    ngOnDestroy() {
        this.connection.unsubscribe();
    }
}
