import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarNoAuthComponent } from './navbar-no-auth.component';

describe('NavbarNoAuthComponent', () => {
  let component: NavbarNoAuthComponent;
  let fixture: ComponentFixture<NavbarNoAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarNoAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarNoAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
