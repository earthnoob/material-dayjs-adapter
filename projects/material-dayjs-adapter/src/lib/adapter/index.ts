import { NgModule } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import { MatDayjsDateAdapter, MAT_DAYJS_DATE_ADAPTER_OPTIONS } from './date-adapter';
import { MAT_DAYJS_DATE_FORMATS } from './date-formats';

export * from './date-adapter';
export * from './date-formats';

@NgModule({
  providers: [
    {
      provide: DateAdapter,
      useClass: MatDayjsDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_DAYJS_DATE_ADAPTER_OPTIONS]
    }
  ],
})
export class DayjsDateModule { }

@NgModule({
  imports: [DayjsDateModule],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MAT_DAYJS_DATE_FORMATS }],
})
export class MatDayjsDateModule { }