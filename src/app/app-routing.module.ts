import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules  } from '@angular/router';
// import { ProductComponent } from '../components/product.components';
import { ProductsComponent } from './product/components/products/products.component';
// import { HomeComponent } from './home/components/home/home.component';
import { CardComponent } from './card/card.component';
import { ContactComponent } from './contact/components/contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/components/page-not-found/page-not-found.component';
import { DemoComponent } from './demo/demo.component';
import { ProductDetailsComponent } from './product/components/product-details/product-details.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminGuard } from './admin.guard';


const routes: Routes = [
  { path: '', component: LayoutComponent,
  children: [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    { path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule )},
    { path: 'products', canActivate : [AdminGuard], loadChildren: () => import('./product/product.module').then((m) => m.ProductModule ) },
    // { path: 'products/:id', component: ProductDetailsComponent },
    { path: 'contact', canActivate : [AdminGuard], loadChildren: () => import('./contact/contact.module').then((m) => m.ContactModule ) },
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
