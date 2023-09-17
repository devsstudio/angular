import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyPipe',
})
export class CurrencyPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return 'S/' + Number(value).toFixed(2);
  }
}
