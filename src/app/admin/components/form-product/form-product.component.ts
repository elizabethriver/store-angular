import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../../../core/services/products/products.service';
import { Router } from '@angular/router';
import { MyValidators } from '../../../utils/validators';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {
  imageUrl$: Observable<any>;
  form: FormGroup;
   constructor(
     private formBuilder: FormBuilder,
     private productsService: ProductsService,
     private router: Router,
     private angularFireStorage: AngularFireStorage
     ) {
    this.createForm();
   }
   private  createForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: [''],
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
        this.router.navigate(['./admin/products']);
        console.log(newProduct);
      });
    }
  }
  uploadfile(event: Event){
    event.preventDefault();
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    console.log(file);
    const filePath = 'image.png';
    const fileRef = this.angularFireStorage.ref(filePath);
    const task = this.angularFireStorage.upload(filePath, file);

    task.snapshotChanges().pipe(
      finalize(() => {
        this.imageUrl$ = fileRef.getDownloadURL();
        // tslint:disable-next-line: deprecation
        this.imageUrl$.subscribe(urlimage => {
          console.log(urlimage);
          this.form.get('image').setValue(urlimage);
        });
      })
  )
  // tslint:disable-next-line: deprecation
  .subscribe();

  }
  get priceField(){
    return this.form.get('price');
  }
  ngOnInit(): void {
  }

}
