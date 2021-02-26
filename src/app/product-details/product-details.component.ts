import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../product.model';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  constructor( private route: ActivatedRoute,
               private  productsService: ProductsService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      // this.id = params['id'];
      const id = params.id;
      this.product = this.productsService.getProduct(id);
      // console.log(product)
    });
  }

}
