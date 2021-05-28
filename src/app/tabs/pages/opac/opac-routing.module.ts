import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpacPage } from './opac.page';

const routes: Routes = [
  {
    path: '',
    component: OpacPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpacPageRoutingModule {}
