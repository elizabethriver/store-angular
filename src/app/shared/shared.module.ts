import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExponencialPipe } from './pipes/exponencial/exponencial.pipe';
import { HighlightDirective } from './directive/highlines/highlight.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CartPipe } from './pipes/cart/cart.pipe';
// import { CustomerComponent } from './customer.component';
// import { NewItemDirective } from './new-item.directive';
// import { OrdersPipe } from './orders.pipe';

@NgModule({
 imports:      [ CommonModule, RouterModule, MaterialModule, ReactiveFormsModule],
 declarations: [ HeaderComponent, FooterComponent , HighlightDirective, ExponencialPipe, CartPipe ],
 exports:      [ HeaderComponent, FooterComponent, HighlightDirective, ExponencialPipe, CartPipe,
                 CommonModule, FormsModule ]
})
export class SharedModule { }
