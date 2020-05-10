import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  onSubmit(user) {
    this.loginForm.reset();
    console.log('You submitted the login form', user);
  }

  ngOnInit(): void {}
}
