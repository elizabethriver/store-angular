import { Injectable } from '@angular/core';
import {Product} from '../../../product.model';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) {

   }
  getAllProduct() {
    console.log(environment.apiUrl);
    return this.http.get<Product[]>(`${environment.apiUrl}/products`);
  }
  getProduct(id: string) {
    return this.http.get<Product>(`${environment.apiUrl}/products/${id}`);
  }
  createProduct(product: Product): Observable<any> {
    // const headers = { 'content-type': 'application/json'};
    // const body = JSON.stringify(person);
    // console.log(body);
    return this.http.post(`${environment.apiUrl}/products/`, product);
  }
  updateProduct(id: string, changes: Partial<Product>): Observable<any> {
    // const body = { title: 'New edition' };
    return this.http.put<Product>(`${environment.apiUrl}/products/${id}`, changes );
  }
  deleteProduct(id: string): Observable<{}> {
    const url = `${environment.apiUrl}/products/${id}`; // DELETE api/heroes/42
    return this.http.delete(url);
  }
}
