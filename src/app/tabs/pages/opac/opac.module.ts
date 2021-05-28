import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpacPageRoutingModule } from './opac-routing.module';

import { OpacPage } from './opac.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpacPageRoutingModule
  ],
  declarations: [OpacPage]
})
export class OpacPageModule {}
