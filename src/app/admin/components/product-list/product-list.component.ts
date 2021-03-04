import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../../core/services/products/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];
  constructor(
    private  productsService: ProductsService) { }

  ngOnInit() {
    this.fetchProducts();
  }
  fetchProducts(){
    this.productsService.getAllProduct()
    .subscribe(products => {this.products = products; });
  }
  // updateProduct(){
  //   const updateProduct: Partial<Product> = {
  //     id: '12',
  //     title: 'new since angular',
  //     image: 'assets/images/banner-1.jpg',
  //     price: 4000,
  //     description: 'new edition'
  //   };
  //   this.productsService.updateProduct('2', updateProduct)
  //   .subscribe(data => this.product = data.id);
  // }
  deleteProduct(id: string) {
    this.productsService.deleteProduct(id)
    .subscribe(rta => {
      // this.fetchProduct();
      console.log(rta);
      this.fetchProducts();
    });
  }
}
