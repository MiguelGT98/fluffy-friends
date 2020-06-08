import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthLocalStorageService } from '../services/auth-local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private location: Location,
    private authLocal: AuthLocalStorageService
  ) {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: '',
    });

    if (this.authLocal.getCurrentUser()) {
      this.location.replaceState('/');
      this.router.navigate(['/app']);
    }
  }

  onSubmit(user) {
    this.authService.login(user).subscribe(
      (success) => {
        this.authLocal.setCurrentUser(success.token);
        this.location.replaceState('/');
        this.router.navigate(['/app']);
        console.log(success);
      },
      (errors) => {
        console.error(errors);
      }
    );
    this.loginForm.reset();
  }

  ngOnInit(): void {}
}
