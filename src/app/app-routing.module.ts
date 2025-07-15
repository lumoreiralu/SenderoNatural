import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SenderoProductsComponent } from './sendero-products/sendero-products.component';
import { SenderoAboutComponent } from './sendero-about/sendero-about.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: SenderoProductsComponent
  },
  {
    path: 'about',
    component: SenderoAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
