import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../model/Category';

@Pipe({
  name: 'categoryFilter',
  pure: false
})
export class CategoryFilterPipe implements PipeTransform {

  transform(value: any, category: Category[]): any {
    console.log("pipe");
    console.log(category);
    if (category.length === 0) {
      return value;
    }
    return value.filter(item => category.indexOf(item.category) !== -1);
  }

}
