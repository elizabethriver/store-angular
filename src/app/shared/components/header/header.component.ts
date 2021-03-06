import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product.model';
import { CartService } from '../../../core/services/cart/cart.service';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  total$: Observable<number>;
  constructor(
    private cartService: CartService,
  ) {
    // tslint:disable-next-line: deprecation
    this.total$ = this.cartService.cart$
      .pipe(map(products => products.length));
  }

  ngOnInit(): void {
  }

}
