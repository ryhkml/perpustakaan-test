import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(({ HomePageModule }) => HomePageModule)
      },
      {
        path: 'opac',
        loadChildren: () => import('./pages/opac/opac.module').then(({ OpacPageModule }) => OpacPageModule)
      },
      {
        path: 'information',
        loadChildren: () => import('./pages/information/information.module').then(({ InformationPageModule }) => InformationPageModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
