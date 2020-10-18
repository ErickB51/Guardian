import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkinstorePage } from './skinstore.page';

const routes: Routes = [
  {
    path: '',
    component: SkinstorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkinstorePageRoutingModule {}
