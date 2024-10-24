import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
    star: string = "/img/smalStar.svg";
    pai: string = "/img/pai.svg";

  form:FormGroup =new FormGroup({
    email:new FormControl("",[Validators.required,this.customeEmailValidator])
  })

  getError(control:any) : string {
    if(control.errors?.required && control.touched)
      return 'Ви нічого не ввели!';
    else if(control.errors?.emailError && control.touched)
      return 'Будь ласка введіть правильну пошту!';
    else return '';
  }

  customeEmailValidator(control:AbstractControl) {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/;
    const value = control.value;
    if(!pattern.test(value) && control.touched)
      return {
        emailError:true
      }
    else return null;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
