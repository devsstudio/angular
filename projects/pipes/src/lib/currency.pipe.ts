import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyPipe',
})
export class CurrencyPipe implements PipeTransform {
  transform(value: any, currency: 'USD' | 'PEN'): any {
    return (currency === 'USD' ? '$' : 'S/') + (new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value));
  }
}
