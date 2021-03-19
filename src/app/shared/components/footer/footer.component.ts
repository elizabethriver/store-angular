import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  emailSent: FormControl;
  constructor() {
    this.emailSent = new FormControl('', [
      Validators.required,
      Validators.email]);
    // tslint:disable-next-line: deprecation
    this.emailSent.valueChanges.subscribe(value => console.log(value));
   }
  setNameValue() {
    if (this.emailSent.valid) {
      console.log('Name: ' + this.emailSent.value);
    }
    // this.name.setValue('Donald Trump');
    // console.log('Name: ' + this.name.value);
    // console.log('Validation Status: ' + this.name.status);
  }
  ngOnInit(): void {
  }

}
