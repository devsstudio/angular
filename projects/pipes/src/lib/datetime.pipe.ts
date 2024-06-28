import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'datetimePipe',
})
export class DatetimePipe extends DatePipe implements PipeTransform {
  override transform(value: any, format: string = 'dd/MM/yyyy h:mm:ss a'): any {
    return super.transform(value, format);
  }
}
