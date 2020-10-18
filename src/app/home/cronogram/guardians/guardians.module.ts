import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuardiansPageRoutingModule } from './guardians-routing.module';

import { GuardiansPage } from './guardians.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuardiansPageRoutingModule
  ],
  declarations: [GuardiansPage]
})
export class GuardiansPageModule {}
