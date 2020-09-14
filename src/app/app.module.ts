import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from  '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProdListComponent } from './product/prod-list/prod-list.component';
import {UserService} from '.././app/shared/shop/user.service';
import { CartComponent } from './product/cart/cart.component';
import { PurchaseComponent } from './product/purchase/purchase.component';

@NgModule({
  declarations: [
    AppComponent,
	LoginComponent,
	RegisterComponent,
	ProdListComponent,
	CartComponent,
	PurchaseComponent,
 ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    
    HttpClientModule
  ],
  
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
