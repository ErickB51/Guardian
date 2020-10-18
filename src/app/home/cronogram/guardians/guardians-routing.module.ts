import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuardiansPage } from './guardians.page';

const routes: Routes = [
  {
    path: '',
    component: GuardiansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuardiansPageRoutingModule {}
