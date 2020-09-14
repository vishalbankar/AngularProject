import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProdListComponent } from './product/prod-list/prod-list.component';
import { CartComponent } from "./product/cart/cart.component";
const routes: Routes = [
  {path:'', component:ProdListComponent },
  {path:'login', component:LoginComponent },
  {path:'register', component:RegisterComponent },
  {path:'cart', component:CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
