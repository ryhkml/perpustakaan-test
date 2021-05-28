import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IntroductionComponent } from './components/introduction/introduction.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    IntroductionComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule
  ],
  exports: [
    IntroductionComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
