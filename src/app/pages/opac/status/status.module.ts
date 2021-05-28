import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { StatusPageRoutingModule } from './status-routing.module';

import { StatusPage } from './status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatusPageRoutingModule
  ],
  declarations: [StatusPage]
})
export class StatusPageModule { }
