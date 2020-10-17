import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CronogramPage } from './cronogram.page';

const routes: Routes = [
  {
    path: '',
    component: CronogramPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CronogramPageRoutingModule {}
