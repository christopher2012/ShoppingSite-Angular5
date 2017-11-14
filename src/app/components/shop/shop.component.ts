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
  categorySelectedNames = [];
  searchString = '';
  minValue: number;
  maxValue: number;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getItemListOb()
        .subscribe(items => this.itemList = items,
            err => {
                console.log(err);
            }
        );

    this.dataService.getCategoryListOb()
        .subscribe(category => console.log(category),
        err => {
          console.log(err);
        }
        );

        this.dataService.getCategoryListOb()
          .subscribe(categories => this.categoryList = categories);
  }

  onSelectListView(category: Category) {
    if (category.isSelected) {
      this.categorySelectedNames.push(category.name);
    } else {
      const index = this.categorySelectedNames.indexOf(category.name);
      console.log(index);
      if (index > -1 ) {
        this.categorySelectedNames.splice(index, 1);
      }
    }
    console.log(this.categorySelectedNames);
  }

  clearFilter(): void {
    this.searchString = '';
    this.categorySelectedNames = [];
    for ( const category of this.categoryList ) {
      category.isSelected = false;
    }
  }

  onSearch(searchString: any): void {
    this.searchString = searchString;
  }

  onMinValue(minValue: number) {
    this.minValue = minValue;
    console.log(minValue);
  }

  onMaxValue(maxValue) {
    this.maxValue = maxValue;
    console.log(maxValue);
  }

}
