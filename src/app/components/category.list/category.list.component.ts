import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category.list.component.html',
  styleUrls: ['./category.list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor() { }

  @Input() categoryList: string[];
  @Output() onSelectListView = new EventEmitter<any>();

  ngOnInit() {
  }

  onSelect(category: any) {
    this.onSelectListView.emit(category);
  }

}
