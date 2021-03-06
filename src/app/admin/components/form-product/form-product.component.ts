import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../../../core/services/products/products.service';
import { Router } from '@angular/router';
import { MyValidators } from '../../../utils/validators';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {
  form: FormGroup;
   constructor(
     private formBuilder: FormBuilder,
     private productsService: ProductsService,
     private router: Router
     ) {
    this.createForm();
   }
   private  createForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
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
    this.productsService.createProduct(product).subscribe((newProduct) => {
      this.router.navigate(['/admin/products']);
      console.log(newProduct);
    });
  }
}
get priceField(){
  return this.form.get('price');
}
  ngOnInit(): void {
  }

}
