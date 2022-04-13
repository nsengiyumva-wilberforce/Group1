import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DinningPage } from './dinning.page';

const routes: Routes = [
  {
    path: '',
    component: DinningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DinningPageRoutingModule {}
