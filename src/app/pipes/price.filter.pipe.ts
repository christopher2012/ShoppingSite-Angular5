import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFilter'
})
export class PriceFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);
    console.log(args);
    if (args.min !== '' && args.max !== '') {
      const minNumber = Number.parseInt(args.min);
      const maxNumber = Number.parseInt(args.max);
      return value.filter(item => Number.parseInt(item.price) > minNumber)
        .filter(item => Number.parseInt(item.price) < maxNumber);
    } else if (args.min !== '') {
      const minNumber = Number.parseInt(args.min);
      return value.filter(item => Number.parseInt(item.price) > minNumber);
    } else if (args.max !== '') {
      const maxNumber = Number.parseInt(args.max);
      return value.filter(item => Number.parseInt(item.price) < maxNumber);
    } else {
      return value;
    }
  }
}
