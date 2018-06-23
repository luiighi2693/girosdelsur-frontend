import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsignmentRoutingModule } from './consignment-routing.module';
import { ConsignmentComponent } from './consignment.component';

@NgModule({
  declarations: [
    ConsignmentComponent,
  ],
  imports: [
    CommonModule,
    ConsignmentRoutingModule
  ]
})
export class ConsignmentModule { }
