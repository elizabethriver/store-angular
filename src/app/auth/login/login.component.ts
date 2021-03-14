import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.sigIn();
  }

  private sigIn() {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
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
  ngOnInit(): void {
    }

}
