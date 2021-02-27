import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/components/product/product.components';

import { CardComponent } from './card/card.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductsComponent } from './product/components/products/products.component';


// import { DemoComponent } from './demo/demo.component';

import { ProductDetailsComponent } from './product/components/product-details/product-details.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    // DemoComponent,
    LayoutComponent
    // ProductComponent,
    // ProductsComponent,
    // ProductDetailsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
