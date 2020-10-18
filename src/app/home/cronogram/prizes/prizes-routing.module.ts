import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrizesPage } from './prizes.page';

const routes: Routes = [
  {
    path: '',
    component: PrizesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrizesPageRoutingModule {}
