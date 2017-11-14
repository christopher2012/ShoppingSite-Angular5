import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plnCurrency'
})
export class PlnCurrencyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value + ' zł';
  }

}
