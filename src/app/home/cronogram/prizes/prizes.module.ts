import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrizesPageRoutingModule } from './prizes-routing.module';

import { PrizesPage } from './prizes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrizesPageRoutingModule
  ],
  declarations: [PrizesPage]
})
export class PrizesPageModule {}
