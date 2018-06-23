import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';

const routes: Routes = [
  { path: 'dashboard', component: MainComponent, loadChildren: '../dashboard/dashboard.module#DashboardModule' },
  { path: 'consignment', component: MainComponent, loadChildren: '../consignment/consignment.module#ConsignmentModule' },
  { path: 'account', component: MainComponent, loadChildren: '../account/account.module#AccountModule' },
  { path: 'profile', component: MainComponent, loadChildren: '../profile/profile.module#ProfileModule' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
