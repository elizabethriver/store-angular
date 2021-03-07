import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product.model';
import { CartService } from '../../../core/services/cart/cart.service';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  product$: Observable<Product[]>;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  // total$: Observable<number>;
  constructor( private cartService: CartService, private formBuilder: FormBuilder ) {

    // this.cartService.pipe(map(product => {})).suscribe(val => console.log(val))
    this.product$ = this.cartService.cart$;
   }
  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
