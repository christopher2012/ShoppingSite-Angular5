import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  pure: false
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, searchString: string): any {
    if ( searchString === undefined || searchString.length === 0 ) {
      return value;
    } else {
      return value.filter(item => item.desc.toLowerCase().includes(searchString.toLowerCase()));
    }
  }
}
