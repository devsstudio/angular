import { DatePipe as AngularDatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe',
})
export class DatePipe extends AngularDatePipe implements PipeTransform {
  override transform(value: any, args?: any): any {
    return super.transform(value, 'dd/MM/YYYY');
  }
}
