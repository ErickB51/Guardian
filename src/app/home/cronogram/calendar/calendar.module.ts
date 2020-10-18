import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { CalendarPage } from '../calendar/calendar.page';
import { CalendarPageRoutingModule } from './calendar-routing.module';

import { NgCalendarModule } from 'ionic2-calendar';
import { CalModalPageModule } from 'src/app/pages/cal-modal/cal-modal.module';

import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de'
registerLocaleData(localeDe);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarPageRoutingModule,
    NgCalendarModule,
    CalModalPageModule
  ],
  declarations: [CalendarPage],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-EN' }
  ]
})
export class CalendarPageModule {}
