import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'todo-page',
    loadChildren: () => import('./todo-page/todo-page.module').then( m => m.TodoPagePageModule)
  },
  {
    path: 'parents',
    loadChildren: () => import('./parents/parents.module').then( m => m.ParentsPageModule)
  },
  {
    path: 'kids',
    loadChildren: () => import('./kids/kids.module').then( m => m.KidsPageModule)
  },
  {
    path: 'kitchen',
    loadChildren: () => import('./kitchen/kitchen.module').then( m => m.KitchenPageModule)
  },
  {
    path: 'seating',
    loadChildren: () => import('./seating/seating.module').then( m => m.SeatingPageModule)
  },
  {
    path: 'dinning',
    loadChildren: () => import('./dinning/dinning.module').then( m => m.DinningPageModule)
  },
  {
    path: 'bathroom',
    loadChildren: () => import('./bathroom/bathroom.module').then( m => m.BathroomPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
