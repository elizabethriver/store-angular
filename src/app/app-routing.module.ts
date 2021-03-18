import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules  } from '@angular/router';
// import { CardComponent } from './card/card.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminGuard } from './admin.guard';
// import { AngularFireAuthGuard } from '@angular/fire/auth-guard';


const routes: Routes = [
  { path: '', component: LayoutComponent,
  children: [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    { path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule )},
    { path: 'products', loadChildren: () => import('./product/product.module').then((m) => m.ProductModule ) },
    // { path: 'products/:id', component: ProductDetailsComponent },
    { path: 'contact', loadChildren: () => import('./contact/contact.module').then((m) => m.ContactModule ) },
    { path: 'order', loadChildren: () => import('./order/order.module').then((m) => m.OrderModule ) },
    { path: 'demo', loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule) },

  ]},

  // { path: 'card', component: CardComponent },
  { path: 'admin',  canActivate: [AdminGuard], loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule ) },
  { path: 'auth',  loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule ) },
  { path: '**', loadChildren: () => import('./page-not-found/page-not-found.module').then((m) => m.PageNotFoundModule ) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes,   {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
