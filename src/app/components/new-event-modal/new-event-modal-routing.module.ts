import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewEventModalPage } from './new-event-modal.page';

const routes: Routes = [
  {
    path: '',
    component: NewEventModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewEventModalPageRoutingModule {}
