import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayPipe',
  standalone: false,
})
export class DayPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value + ' días';
  }
}
