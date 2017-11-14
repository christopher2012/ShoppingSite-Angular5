import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input() category: string;
  @Output() onSelect = new EventEmitter<any>();
  isSelected = false;

  constructor() { }

  select(select: boolean) {
      this.isSelected = select;
      this.onSelect.emit({ 'select': select, 'category': this.category});
  }

  ngOnInit() {

  }

}
