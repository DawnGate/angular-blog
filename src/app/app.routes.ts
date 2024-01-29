import { Routes } from '@angular/router';

import { HomePremiumComponent } from './premium/home/home.component';
import { HomeSimpleComponent } from './simple/home/home.component';


export const routes: Routes = [
  {
    path: '', component: HomeSimpleComponent,
  },
  {
    path: 'simple', component: HomeSimpleComponent,
  },
  {
    path: 'premium', component: HomePremiumComponent,
  }
];
