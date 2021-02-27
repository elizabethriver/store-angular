import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialRoutingModule } from './material-routing.module';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialRoutingModule,
    MatButtonModule
  ],
  exports: [
    MatButtonModule
  ]
})
export class MaterialModule { }
