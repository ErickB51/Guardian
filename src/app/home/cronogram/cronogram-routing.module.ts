import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CronogramPage } from './cronogram.page';

const routes: Routes = [
  {
    path: '',
    component: CronogramPage,
    children: [
        {
            path: 'skinstore',
            loadChildren: () => import('./skinstore/skinstore.module').then( m => m.SkinstorePageModule)
        },
        {
            path: 'settings',
            loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
        },
        {
            path: 'calendar',
            loadChildren: () => import('./calendar/calendar.module').then( m => m.CalendarPageModule)
        },
        {
            path: 'guardians',
            loadChildren: () => import('./guardians/guardians.module').then( m => m.GuardiansPageModule)
        },
        {
            path: 'prizes',
            loadChildren: () => import('./prizes/prizes.module').then( m => m.PrizesPageModule)
        },
        {
            path: '',
            redirectTo: 'calendar',
            pathMatch: 'full'
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CronogramPageRoutingModule {}
