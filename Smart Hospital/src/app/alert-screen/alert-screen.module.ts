import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertScreenPageRoutingModule } from './alert-screen-routing.module';

import { AlertScreenPage } from './alert-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertScreenPageRoutingModule
  ],
  declarations: [AlertScreenPage]
})
export class AlertScreenPageModule {}
