import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  pure: false
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, searchString: string): any {
    //console.log(value);
    //console.log(searchString);
    if ( searchString === undefined || searchString.length === 0 ) {
      return value;
    } else {
      return value.filter(item => item.description.toLowerCase().includes(searchString.toLowerCase()) ||
        item.name.toLowerCase().includes(searchString.toLowerCase()));
    }
  }
}
