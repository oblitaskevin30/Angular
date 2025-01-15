import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  {path : "login" , component:LoginComponent},
  {path : "signup" , component : SignupComponent},
  {path : "admin" , loadChildren : () => import("./modules/admin/admin.module").then(e=>e.AdminModule)},
  {path : "customer" , loadChildren : () => import("./modules/customer/customer.module").then(e=>e.CustomerModule)},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
