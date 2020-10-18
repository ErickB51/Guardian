import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkinstorePageRoutingModule } from './skinstore-routing.module';

import { SkinstorePage } from './skinstore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkinstorePageRoutingModule
  ],
  declarations: [SkinstorePage]
})
export class SkinstorePageModule {}
