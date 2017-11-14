import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../model/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category.list.component.html',
  styleUrls: ['./category.list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor() { }

  @Input() categoryList: Category[];
  @Output() onSelectListView = new EventEmitter<any>();

  ngOnInit() {
  }

  onSelect(categoryInfo: any) {
    this.onSelectListView.emit(categoryInfo);
  }

}
