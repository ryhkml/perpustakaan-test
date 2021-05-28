import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(({ TabsPageModule }) => TabsPageModule)
  },
  // TABS OPAC
  {
    path: 'opac/collection/:id',
    loadChildren: () => import('./pages/opac/collection/collection.module').then(({ CollectionPageModule }) => CollectionPageModule)
  },
  {
    path: 'opac/status/:id',
    loadChildren: () => import('./pages/opac/status/status.module').then(({ StatusPageModule }) => StatusPageModule)
  },
  // TABS INFORMATION
  {
    path: 'information/report',
    loadChildren: () => import('./pages/information/report/report.module').then(({ ReportPageModule }) => ReportPageModule)
  },
  {
    path: 'information/help',
    loadChildren: () => import('./pages/information/help/help.module').then(({ HelpPageModule }) => HelpPageModule)
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
