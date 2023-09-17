import { NgModule } from '@angular/core';
import { CurrencyPipe } from './currency.pipe';
import { DatePipe } from './date.pipe';
import { DatetimePipe } from './datetime.pipe';
import { DayPipe } from './day.pipe';
import { HourMinutePipe } from './hour-minute.pipe';
import { IntPipe } from './int.pipe';
import { PercentPipe } from './percent.pipe';
import { TruncatePipe } from './truncate.pipe';


@NgModule({
  declarations: [
    CurrencyPipe,
    DatePipe,
    DatetimePipe,
    DayPipe,
    HourMinutePipe,
    IntPipe,
    PercentPipe,
    TruncatePipe
  ],
  imports: [
  ],
  exports: [
    CurrencyPipe,
    DatePipe,
    DatetimePipe,
    DayPipe,
    HourMinutePipe,
    IntPipe,
    PercentPipe,
    TruncatePipe
  ]
})
export class DevsPipesModule { }
