import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFilter'
})
export class PriceFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);
    console.log(args);

    if (args.min !== undefined || args.max !== undefined) {
    
    }

    if (args.min !== undefined) {
      return value.filter(item => item.price > args.min);
    }

    if (args.max !== undefined) {
      return value.filter(item => item.price > args.max);
    }

    
  }

}
