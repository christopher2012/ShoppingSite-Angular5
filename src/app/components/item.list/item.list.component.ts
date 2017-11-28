import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Category } from '../../model/category';
import { CartDataService } from '../../services/cart.data.service';
import { Item } from '../../model/item';

@Component({
    selector: 'app-item-list',
    templateUrl: 'item.list.component.html',
    styleUrls: ['item.list.component.css']
})

export class ItemListComponent implements OnInit {

    @Input() itemList;
    @Input() categorySelectedNames: string[];
    @Input() searchString: string;
    @Input() minValue = '';
    @Input() maxValue = '';

    private pageNumber = 1;

    constructor(private cartService: CartDataService) { }

    ngOnInit() {

    }

    onAdd(item: Item) {
        console.log(item);
        this.cartService.addItemToCart(item);
    }
}
