import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotpasswordRoutingModule } from './forgotpassword-routing.module';

import { ForgotpasswordComponent } from './forgotpassword.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ForgotpasswordComponent
  ],
  imports: [
    CommonModule,
    ForgotpasswordRoutingModule,
    FormsModule
  ],

})
export class ForgotpasswordModule { }
