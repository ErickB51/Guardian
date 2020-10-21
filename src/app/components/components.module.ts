import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventModalComponent } from './event-modal/event-modal.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [EventModalComponent],
  exports: [EventModalComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
