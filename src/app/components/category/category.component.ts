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

  constructor() { }

  select(select: boolean) {
      this.category.isSelected = select;
      this.onSelect.emit(this.category);
  }

  ngOnInit() {

  }

}
