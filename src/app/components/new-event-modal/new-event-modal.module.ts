import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewEventModalPageRoutingModule } from './new-event-modal-routing.module';

import { NewEventModalPage } from './new-event-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewEventModalPageRoutingModule
  ],
  declarations: [NewEventModalPage]
})
export class NewEventModalPageModule {}
