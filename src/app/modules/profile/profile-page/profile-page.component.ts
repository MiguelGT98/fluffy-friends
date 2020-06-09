import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { AuthLocalStorageService } from 'src/app/auth/auth-local-storage.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
  userToken: string;
  user$: Observable<User>;

  constructor(
    private authLocal: AuthLocalStorageService,
    private router: Router,
    private location: Location,
    private profileService: ProfileService
  ) {
    this.userToken = this.authLocal.getCurrentUser();
  }

  ngOnInit(): void {
    this.profileService.getData(this.userToken).subscribe(
      (success) => {
        this.user$ = User.fromJSON(success.user) as Observable<User>;
      },
      (errors) => {
        console.error(errors);
      }
    );
  }
}
