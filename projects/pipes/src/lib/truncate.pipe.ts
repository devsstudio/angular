import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncatePipe',
  standalone: false,
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number): any {
    if (limit <= value.length) {
      return value.substring(0, limit) + "...";
    } else {
      return value;
    }
  }
}
