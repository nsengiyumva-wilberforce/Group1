import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DinningPageRoutingModule } from './dinning-routing.module';

import { DinningPage } from './dinning.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DinningPageRoutingModule
  ],
  declarations: [DinningPage]
})
export class DinningPageModule {}
