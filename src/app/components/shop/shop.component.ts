import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class ShopComponent implements OnInit, OnDestroy {

  itemList = [];
  categoryList: Category[];
  categorySelectedNames = [];
  searchString = '';
  minValue = '';
  maxValue = '';
  connection;

  constructor(private dataService: DataService) {

  }

  ngOnInit() {

    this.connection = this.dataService.getMessage().subscribe( message => {
      console.log("######################");
      console.log(message);
        this.updateItems();
        this.updateCategories();
      }
    );

    this.updateItems();
    this.updateCategories();

  }


  updateItems() {
    this.dataService.getItemListLocal()
    .subscribe(
      items => {
        this.itemList = items;
        console.log(items);
      },
      err => {
        console.log(err);
      }
    );
  }

  updateCategories() {

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
  }

  clearFilter(): void {
    this.searchString = '';
    this.categorySelectedNames = [];
    this.minValue = '';
    this.maxValue = '';
    for ( const category of this.categoryList ) {
      category.isSelected = false;
    }
  }

  onSearch(searchString: any): void {
    this.searchString = searchString;
  }

  onMinValue(minValue: string) {
    this.minValue = minValue;
  }

  onMaxValue(maxValue: string) {
    this.maxValue = maxValue;
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
}

}
