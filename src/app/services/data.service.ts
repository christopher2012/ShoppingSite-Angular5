import { items } from '../../assets/data/item.data';
import { HttpClient } from '@angular/common/http';

export class DataService {
    itemList = items;

    constructor() { }

    getItemList() {
 
        return items;
    }

    getCategoryList() {
        return ['Kategoria 1', 'Kategoria 2', 'Kategoria 3', 'Kategoria 4'];
    }
}
