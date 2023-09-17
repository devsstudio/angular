import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'datetimePipe',
})
export class DatetimePipe extends DatePipe implements PipeTransform {
  override transform(value: any, args?: any): any {
    return super.transform(value, 'dd/MM/YYYY h:mm:ss a');
  }
}
