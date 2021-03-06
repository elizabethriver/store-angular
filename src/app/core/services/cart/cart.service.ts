import { Injectable } from '@angular/core';
import { Product } from '../../../product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: Product[] = [];
  private subjectCart = new BehaviorSubject<Product[]>([]);
  cart$ = this.subjectCart.asObservable();
  constructor() { }
  addCartProduct(product: Product) {
    // Evitar la inmutacion
    this.products = [...this.products, product];
    this.subjectCart.next(this.products);
  }
}
