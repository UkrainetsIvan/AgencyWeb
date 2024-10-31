import { Component } from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-hello-form',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './hello-form.component.html',
  styleUrl: './hello-form.component.scss'
})
export class HelloFormComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, this.customeEmailValidator]),
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    message: new FormControl("", [Validators.required])
  });

  successMessage: string = '';

  getError(control:any) : string {
    if(control.errors?.required && control.touched)
      return 'Ви нічого не ввели!';
    else if(control.errors?.emailError && control.touched)
      return 'Будь ласка введіть правильну пошту!';
    else return '';
  }

  customeEmailValidator(control: AbstractControl) {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/;
    const value = control.value;
    if (!pattern.test(value) && control.touched)
      return {
        emailError: true
      };
    else return null;
  }

  submitForm():void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    } else {
      this.successMessage = 'Форма відправлена успішно!';

      setTimeout(() => {
        this.form.reset();
        this.successMessage = '';
      }, 3000);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
