import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditEventModalPage } from './edit-event-modal.page';

const routes: Routes = [
  {
    path: '',
    component: EditEventModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditEventModalPageRoutingModule {}
