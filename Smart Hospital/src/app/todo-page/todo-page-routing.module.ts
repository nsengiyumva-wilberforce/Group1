import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoPagePage } from './todo-page.page';

const routes: Routes = [
  {
    path: '',
    component: TodoPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoPagePageRoutingModule {}
