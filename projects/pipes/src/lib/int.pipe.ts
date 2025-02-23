import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'intPipe',
  standalone: false,
})
export class IntPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return Number(value).toFixed(0);
  }
}
