import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExponencialPipe } from './pipes/exponencial/exponencial.pipe';
import { HighlightDirective } from './directive/highlines/highlight.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

// import { CustomerComponent } from './customer.component';
// import { NewItemDirective } from './new-item.directive';
// import { OrdersPipe } from './orders.pipe';

@NgModule({
 imports:      [ CommonModule ],
 declarations: [ HeaderComponent, FooterComponent , HighlightDirective, ExponencialPipe ],
 exports:      [ HeaderComponent, FooterComponent, HighlightDirective, ExponencialPipe,
                 CommonModule, FormsModule ]
})
export class SharedModule { }
