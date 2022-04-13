import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodoPagePageRoutingModule } from './todo-page-routing.module';

import { TodoPagePage } from './todo-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodoPagePageRoutingModule
  ],
  declarations: [TodoPagePage]
})
export class TodoPagePageModule {}
