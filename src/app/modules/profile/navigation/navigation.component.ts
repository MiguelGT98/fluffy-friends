import { Component, OnInit } from '@angular/core';
import { AuthLocalStorageService } from '../../landing-page/services/auth-local-storage.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor(
    private authLocal: AuthLocalStorageService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {}

  logout() {
    this.authLocal.logOut();
    this.location.replaceState('/');
    this.router.navigate(['/']);
  }
}
