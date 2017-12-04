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
    @Output() onDetails = new EventEmitter<any>();

    addToCart() {
        this.onAdd.emit(this.item);
    }

    details() {
        this.onDetails.emit(this.item);
    }
}
