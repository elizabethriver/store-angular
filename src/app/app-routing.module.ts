import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules  } from '@angular/router';
// import { ProductComponent } from '../components/product.components';
import { ProductsComponent } from './products/products.component';
// import { HomeComponent } from './home/components/home/home.component';
import { CardComponent } from './card/card.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DemoComponent } from './demo/demo.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent,
  children: [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    { path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule )},
    { path: 'products', component: ProductsComponent },
    { path: 'products/:id', component: ProductDetailsComponent },
    { path: 'contact', component: ContactComponent },
  ]

  },

  { path: 'card', component: CardComponent },
  // { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  // { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,   {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
