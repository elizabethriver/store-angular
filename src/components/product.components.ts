import { Component, Input, Output, EventEmitter, DoCheck, OnInit, OnDestroy , OnChanges, SimpleChanges} from '@angular/core';
import { Product } from '../app/product.model';
@Component({
    selector: 'app-product',
    templateUrl: './product.components.html',
    styleUrls: ['./product.components.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy  {
 @Input() product: Product;
 @Output() addedCart = new EventEmitter<any>();
 today: number = Date.now();
 constructor(){
     console.log('constructor');
 }
// ngOnChanges(changes: SimpleChanges) {
//     // changes.prop contains the old and the new value...
//     console.log('ngOnChanges')
//     console.log(changes)
//   }
    ngOnInit() {
     console.log('ngOnInit');
  }
    ngDoCheck() {
    console.log('ngDoCheck');
  }
    ngOnDestroy() {
     console.log('ngOnDestroy');
  }
 addCart() {
     console.log('added');
     this.addedCart.emit(this.product.id);
 }
}
