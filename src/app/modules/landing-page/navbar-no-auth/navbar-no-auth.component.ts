import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'landing-navbar-no-auth',
  templateUrl: './navbar-no-auth.component.html',
  styleUrls: ['./navbar-no-auth.component.scss'],
})
export class NavbarNoAuthComponent implements OnInit {
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor() {}

  ngOnInit(): void {}
}
