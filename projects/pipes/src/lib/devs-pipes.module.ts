import { NgModule } from '@angular/core';
import { CurrencyPipe } from './currency.pipe';
import { DatePipe } from './date.pipe';
import { DatetimePipe } from './datetime.pipe';
import { DayPipe } from './day.pipe';
import { HourMinutePipe } from './hour-minute.pipe';
import { IntPipe } from './int.pipe';
import { PercentPipe } from './percent.pipe';
import { TruncatePipe } from './truncate.pipe';
import { TimeAgoPipe } from './time-ago.pipe';


@NgModule({
  declarations: [
    CurrencyPipe,
    DatePipe,
    DatetimePipe,
    DayPipe,
    HourMinutePipe,
    IntPipe,
    PercentPipe,
    TruncatePipe,
    TimeAgoPipe
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
    TruncatePipe,
    TimeAgoPipe
  ]
})
export class DevsPipesModule { }
