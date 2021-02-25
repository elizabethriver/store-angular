import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from "../products.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor( private route: ActivatedRoute,
    private  productsService: ProductsService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      // this.id = params['id'];
      const id = params.id;
      const products = this.productsService.getProduct(id);
      console.log(products)
    });
  }

}
