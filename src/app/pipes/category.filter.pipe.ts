import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryFilter',
  pure: false
})
export class CategoryFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args.length === 0) {
      return value;
    }
    return value.filter(item => args.indexOf(item.category) !== -1);
  }

}
