import { Component, Input } from "@angular/core";
import { Product } from "../app/product.model";
@Component({
    selector: 'app-product',
    templateUrl: './product.components.html'
})
export class ProductComponent {
 @Input() product: Product;
}