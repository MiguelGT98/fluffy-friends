import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  registerForm;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      userName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    });
  }

  onSubmit(user) {
    this.registerForm.reset();
    console.log('You submitted the register form', user);
  }

  ngOnInit(): void {}
}
