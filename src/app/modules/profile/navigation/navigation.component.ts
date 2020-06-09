import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

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
    private authService: AuthService,
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
    this.authService.logOut();
    this.location.replaceState('/');
    this.router.navigate(['/']);
  }
}
