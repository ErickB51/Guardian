import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditEventModalPageRoutingModule } from './edit-event-modal-routing.module';

import { EditEventModalPage } from './edit-event-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditEventModalPageRoutingModule
  ],
  declarations: [EditEventModalPage]
})
export class EditEventModalPageModule {}
