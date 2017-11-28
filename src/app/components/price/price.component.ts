import { Component, OnInit, OnChanges, Output, EventEmitter, Input } from '@angular/core';
import { NouisliderModule } from 'ng2-nouislider';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit, OnChanges {

  @Output() onMinValue = new EventEmitter<number>();
  @Output() onMaxValue = new EventEmitter<number>();
  @Input() min = '';
  @Input() max = '';

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  minValue(event: any): void {
    this.onMinValue.emit(event.target.value);
  }

  maxValue(event: any): void {
    this.onMaxValue.emit(event.target.value);
  }

}
