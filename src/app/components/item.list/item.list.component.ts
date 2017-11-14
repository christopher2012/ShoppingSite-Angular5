import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../model/category';

@Component({
    selector: 'app-item-list',
    templateUrl: 'item.list.component.html',
    styleUrls: ['item.list.component.css']
})

export class ItemListComponent implements OnInit {

    @Input() itemList;
    @Input() categorySelected: Category[];

    private pageNumber = 1;

    ngOnInit() {

    }


}
