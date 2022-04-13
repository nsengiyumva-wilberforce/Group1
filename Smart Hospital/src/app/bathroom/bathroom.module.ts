import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BathroomPageRoutingModule } from './bathroom-routing.module';

import { BathroomPage } from './bathroom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BathroomPageRoutingModule
  ],
  declarations: [BathroomPage]
})
export class BathroomPageModule {}
