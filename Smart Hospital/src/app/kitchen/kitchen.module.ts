import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KitchenPageRoutingModule } from './kitchen-routing.module';

import { KitchenPage } from './kitchen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KitchenPageRoutingModule
  ],
  declarations: [KitchenPage]
})
export class KitchenPageModule {}
