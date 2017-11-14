import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  providers: [
    DataService
  ],
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  itemList: any[];
  categoryList: string[];
  categorySelected = [];
  searchPhrase = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.itemList = this.dataService.getItemList();
    this.categoryList = this.dataService.getCategoryList();
  }

  onSelectListView(category: any) {
    if (category.select) {
      this.categorySelected.push(category.category);
    } else {
      const index = this.categorySelected.indexOf(category.category);
      console.log(index);
      if (index > -1 ) {
        this.categorySelected.splice(index, 1);
      }
    }
    console.log(this.categorySelected);
  }

}
