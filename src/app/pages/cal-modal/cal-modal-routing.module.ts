import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalModalPage } from './cal-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CalModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalModalPageRoutingModule {}
