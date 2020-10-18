import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CronogramPage } from '../cronogram/cronogram.page';

import { CronogramPageRoutingModule } from './cronogram-routing.module';
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
    CronogramPageRoutingModule,
    NgCalendarModule,
    CalModalPageModule
  ],
  declarations: [CronogramPage],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-EN' }
  ]
})
export class CronogramPageModule {}
