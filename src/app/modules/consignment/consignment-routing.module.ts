import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsignmentComponent } from './consignment.component';

const routes: Routes = [
  {path: '', component: ConsignmentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsignmentRoutingModule { }
