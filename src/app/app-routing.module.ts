import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'main', loadChildren: './modules/main/main.module#MainModule' },
  { path: 'login', loadChildren: './modules/login/login.module#LoginModule' },
  { path: 'signin', loadChildren: './modules/signin/signin.module#SigninModule' },
  { path: 'forgotpassword', loadChildren: './modules/forgotpassword/forgotpassword.module#ForgotpasswordModule' },
  { path: 'restorepassword', loadChildren: './modules/restorepassword/restorepassword.module#RestorepasswordModule' },
  { path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
