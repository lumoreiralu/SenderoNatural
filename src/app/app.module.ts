import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';

import { FormsModule } from '@angular/forms';
import { SenderoAboutComponent } from './sendero-about/sendero-about.component';
import { CartComponent } from './cart/cart.component';
import { SenderoProductsComponent } from './sendero-products/sendero-products.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    SenderoAboutComponent,
    CartComponent,
    SenderoProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
