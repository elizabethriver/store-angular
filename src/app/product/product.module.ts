import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ProductComponent } from './components/product/product.components';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsComponent } from './components/products/products.component';

import { MaterialModule } from '../material/material.module';
@NgModule({
  declarations: [ProductComponent, ProductDetailsComponent, ProductsComponent ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class ProductModule { }
