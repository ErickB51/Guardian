import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { CalendarPage } from '../calendar/calendar.page';
import { CalendarPageRoutingModule } from './calendar-routing.module';

import { NgCalendarModule } from 'ionic2-calendar';

import { registerLocaleData } from '@angular/common';
import localePtBr from '@angular/common/locales/pt'
registerLocaleData(localePtBr);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarPageRoutingModule,
    NgCalendarModule
  ],
  declarations: [CalendarPage],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' }
  ]
})
export class CalendarPageModule {}
