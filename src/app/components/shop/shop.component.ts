import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Item } from '../../model/item';
import { Category } from '../../model/category';

@Component({
  providers: [
    DataService
  ],
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  itemList2: Item[];
  itemList = [];
  categoryList: Category[];
  categorySelected = [];
  searchPhrase = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getItemListOb()
        .subscribe(items => this.itemList = items,
            err => {
                console.log(err);
            }
        );

    this.dataService.getCategoryListOb()
        .subscribe(category => console.log(category)
        );

        this.dataService.getCategoryListOb()
          .subscribe(categories => this.categoryList = categories);
  }

  onSelectListView(categoryInfo: any) {
    if (categoryInfo.select) {
      this.categorySelected.push(categoryInfo.category);
    } else {
      const index = this.categorySelected.indexOf(categoryInfo.category);
      console.log(index);
      if (index > -1 ) {
        this.categorySelected.splice(index, 1);
      }
    }
    console.log(this.categorySelected);
  }

}
