import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CronogramPage } from '../cronogram/cronogram.page';
import { CronogramPageRoutingModule } from './cronogram-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CronogramPageRoutingModule
  ],
  declarations: [CronogramPage],
  providers: []
})
export class CronogramPageModule {}
