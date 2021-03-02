import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../product.model';

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
      // this.product = this.productsService.getProduct(id);
      // // console.log(product)
      this.fetchProductDetail(id);
    });
  }
  fetchProductDetail(id: string){
    this.productsService.getProduct(id)
    .subscribe(product => this.product = product);
  }
  createProduct(){
    const newProduct: Product = {
      id: '12',
      title: 'new since angular',
      image: 'assets/images/banner-1.jpg',
      price: 3000,
      description: 'xxx'
    };
    this.productsService.createProduct(newProduct)
    .subscribe(product => this.product = product);
  }
  updateProduct(){
    const updateProduct: Partial<Product> = {
      id: '12',
      title: 'new since angular',
      image: 'assets/images/banner-1.jpg',
      price: 4000,
      description: 'new edition'
    };
    this.productsService.updateProduct('2', updateProduct)
    .subscribe(data => this.product = data.id);
  }
  deleteProduct(){
    this.productsService
    .deleteProduct('2')
    .subscribe();
  }

}
