import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../../auth/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthLocalStorageService } from 'src/app/auth/auth-local-storage.service';

declare var $: any;

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  registerForm;
  error: any;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private location: Location,
    private authLocal: AuthLocalStorageService
  ) {
    this.registerForm = this.formBuilder.group({
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    });
  }

  onSubmit(user) {
    this.authService.register(user).subscribe(
      (success) => {
        this.authLocal.setCurrentUser(success.token);
        this.location.replaceState('/');
        this.router.navigate(['/app']);
      },
      ({ error }) => {
        $('#error .modal-body').text(error.message);
        $('#error').modal('toggle');
      }
    );
  }

  ngOnInit(): void {}
}
