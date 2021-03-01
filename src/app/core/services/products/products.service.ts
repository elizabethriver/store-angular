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
    console.log(environment.apiUrl)
    return this.http.get<Product[]>(`${environment.apiUrl}`);
  }
  getProduct(id: string) {
    return this.http.get<Product>(`${environment.apiUrl}/${id}`);
  }
}
