import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ProductComponent } from '../components/product.components';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DemoComponent } from './demo/demo.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'card', component: CardComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
