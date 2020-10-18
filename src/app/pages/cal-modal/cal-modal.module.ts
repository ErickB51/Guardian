import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalModalPageRoutingModule } from './cal-modal-routing.module';

import { CalModalPage } from './cal-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalModalPageRoutingModule
  ],
  declarations: [CalModalPage]
})
export class CalModalPageModule {}
