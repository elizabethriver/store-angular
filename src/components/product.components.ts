import { Component, Input, Output, EventEmitter, DoCheck, OnInit, OnDestroy , OnChanges, SimpleChanges} from "@angular/core";
import { Product } from "../app/product.model";
@Component({
    selector: 'app-product',
    templateUrl: './product.components.html',
})
export class ProductComponent implements OnChanges, OnInit, DoCheck, OnDestroy  {
 @Input() product: Product;
 @Output() onAddCart = new EventEmitter<any>();
 constructor(){
     console.log('constructor')
 }
ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    console.log('ngOnChanges')
    console.log(changes)
  }
    ngOnInit() {
     console.log('ngOnInit')
  }
    ngDoCheck() {
    console.log('ngDoCheck')
  }
    ngOnDestroy() {
     console.log('ngOnDestroy')
  }
 addCart() {
     console.log('added')
     this.onAddCart.emit(this.product.id);
 }
}