import { Injectable } from '@angular/core';
import { items } from '../../assets/data/item.data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Category } from '../model/category';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
    itemList = items;

    private itemsUrl = 'http://localhost:8080/api/products';
    private categoriesUrl = 'http://localhost:8080/api/categories';

    constructor(private http: Http, private httpClient: HttpClient) { }

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

    getCategoryList() {
        return ['Kategoria 1', 'Kategoria 2', 'Kategoria 3', 'Kategoria 4'];
    }

}
