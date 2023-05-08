import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { TestComponent } from './test/test.component';
import { UnavailableComponent } from './unavailable/unavailable.component';

const routes: Routes = [

  {
    path: '',
    component: UnavailableComponent,
  }, {
    path: '**',
    component: UnavailableComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
