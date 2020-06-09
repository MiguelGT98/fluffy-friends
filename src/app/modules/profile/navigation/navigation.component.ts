import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { AuthLocalStorageService } from '../../landing-page/services/auth-local-storage.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Input()
  user: User;

  createdAt: string;

  constructor(
    private authLocal: AuthLocalStorageService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    const options: object = {
      year: 'numeric',
      month: 'long',
    };

    this.createdAt = this.user.created_at.toLocaleDateString('es-MX', options);
  }
  
  logout() {
    this.authLocal.logOut();
    this.location.replaceState('/');
    this.router.navigate(['/']);
  }
}
