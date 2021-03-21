import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
    ) {
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
      this.authService.login(user.email, user.password)
      .then(() => {
        this.router.navigate(['/admin/products']);
      })
      .catch(() => {
        alert('not valid');
      });
      // this.productsService.createProduct(product).subscribe((newProduct) => {
      //   this.router.navigate(['/admin/products']);
      //   console.log(newProduct);
      // });
    }
  }
  ngOnInit(): void {
    }

}
