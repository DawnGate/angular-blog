import { Routes } from '@angular/router';

import { HomeSimpleComponent } from './simple/home/home.component';


export const routes: Routes = [
  {
    path: '', redirectTo: "/simple", pathMatch: "full"
  },
  {
    path: 'simple',
    component: HomeSimpleComponent,
    loadChildren: () => import("./simple/routes").then(res => res.SIMPLE_ROUTES)
  },
  {
    path: 'premium',
    loadChildren: () => import("./premium/routes").then(res => res.ROUTES)
  },
  {
    path: '**', component: HomeSimpleComponent
  }
];
