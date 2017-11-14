import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../model/category';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input() category: Category;
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
