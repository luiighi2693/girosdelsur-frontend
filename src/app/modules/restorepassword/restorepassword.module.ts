import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestorepasswordRoutingModule } from './restorepassword-routing.module';

import { RestorepasswordComponent } from './restorepassword.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RestorepasswordComponent
  ],
  imports: [
    CommonModule,
    RestorepasswordRoutingModule,
    FormsModule
  ],

})
export class RestorepasswordModule { }
