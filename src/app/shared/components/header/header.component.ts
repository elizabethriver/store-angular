import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product.model';
import { CartService } from '../../../core/services/cart/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  total = 0;
  constructor(
    private cartService: CartService,
  ) {
    // tslint:disable-next-line: deprecation
    this.cartService.cart$.subscribe((products) => {
      console.log(products);
      this.total = products.length;
    });
  }

  ngOnInit(): void {
  }

}
