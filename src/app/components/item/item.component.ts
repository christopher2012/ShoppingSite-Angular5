import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-item',
    templateUrl: 'item.component.html',
    styleUrls: [
        'item.component.css'
    ]
})

export class ItemComponent {

    @Input() item;
    @Output() onAdd = new EventEmitter<any>();

    addToCart(event: any) {
        this.onAdd.emit(this.item);
    }
}
