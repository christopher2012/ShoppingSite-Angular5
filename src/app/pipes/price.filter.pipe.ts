import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFilter'
})
export class PriceFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);
    console.log(args);
    let tempValue = [];

    if (args.min !== undefined) {
      tempValue = value.filter(item => item.price > args.min);
    }

    if (args.max !== undefined) {
      tempValue = value.filter(item => item.price > args.max);
    }

    return tempValue;
  }

}
