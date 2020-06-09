import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { User } from '../models/user';
import { ProfileService } from '../services/profile.service';
import { AuthLocalStorageService } from 'src/app/auth/auth-local-storage.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  @Input()
  user: User;

  profileForm;

  constructor(
    private formBuilder: FormBuilder,
    private profileService: ProfileService,
    private authLocal: AuthLocalStorageService
  ) {}

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      ...this.user,
      password: '',
      passwordConfirmation: '',
    });
  }

  onSubmit(user) {
    this.profileService
      .updateData(user, this.authLocal.getCurrentUser())
      .subscribe(
        (success) => {
          console.log(success);
        },
        (error) => {}
      );
  }
}
