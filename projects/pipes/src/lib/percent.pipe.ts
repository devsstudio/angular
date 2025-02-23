import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentPipe',
  standalone: false,
})
export class PercentPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return (value * 100).toFixed(0) + '%';
  }
}
