import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../../../core/services/products/products.service';
import { Router } from '@angular/router';
import { MyValidators } from '../../../utils/validators';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: string;

   constructor(
      private  route: ActivatedRoute,
      private formBuilder: FormBuilder,
      private productsService: ProductsService,
      private router: Router
     ) {
    this.createForm();
   }
   private  createForm() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      img: [''],
      description: ['', [Validators.required]],
    });
}
saveProduct(event: Event){
  event.preventDefault();
  console.log(this.form.value);
  if (this.form.valid) {
    const product = this.form.value;
    // tslint:disable-next-line: deprecation
    this.productsService.updateProduct(this.id, product).subscribe((newProduct) => {
      this.router.navigate(['/admin/products']);
      console.log(newProduct);
    });
  }
}
get priceField(){
  return this.form.get('price');
}
  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.route.params.subscribe((params: Params) => {
      // tslint:disable-next-line: no-shadowed-variable
      this.id = params.id;
      this.productsService.getProduct(this.id)
      // tslint:disable-next-line: deprecation
      .subscribe((product) => {
        this.form.patchValue(product);
      });
    });
  }

}
