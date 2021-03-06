import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signUp();
  }
  private signUp() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
  saveDates(event: Event){
    event.preventDefault();
    console.log(this.form.value);
    if (this.form.valid) {
      const user = this.form.value;
      console.log(user);
      // this.productsService.createProduct(product).subscribe((newProduct) => {
      //   this.router.navigate(['/admin/products']);
      //   console.log(newProduct);
      // });
    }
  }
}
