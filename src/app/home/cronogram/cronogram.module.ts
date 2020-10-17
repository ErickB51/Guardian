import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CronogramPageRoutingModule } from './cronogram-routing.module';

import { CronogramPage } from './cronogram.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CronogramPageRoutingModule
  ],
  declarations: [CronogramPage]
})
export class CronogramPageModule {}
