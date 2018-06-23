import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './modules/main/main.module#MainModule' },
  { path: 'login', loadChildren: './modules/login/login.module#LoginModule' },
  { path: 'signin', loadChildren: './modules/signin/signin.module#SigninModule' },
  { path: 'forgotpassword', loadChildren: './modules/forgotpassword/forgotpassword.module#ForgotpasswordModule' },
  { path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
