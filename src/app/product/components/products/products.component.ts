import { Component, OnInit } from '@angular/core';
import {Product} from '../../../product.model';
import { ProductsService } from '../../../core/services/products/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[];

  clickProduct(id: number) {
    // this.items.push(id);
    console.log(id);
  }
  constructor(private  productsService: ProductsService) { }

  ngOnInit() {

      this.products = this.productsService.getAllProduct();

  }

}
