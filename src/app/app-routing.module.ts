import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules  } from '@angular/router';
import { CardComponent } from './card/card.component';
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
  { path: 'demo', loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule) },
  // { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: '**', loadChildren: () => import('./page-not-found/page-not-found.module').then((m) => m.PageNotFoundModule ) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,   {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
