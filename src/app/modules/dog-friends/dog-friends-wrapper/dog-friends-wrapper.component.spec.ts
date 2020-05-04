import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogFriendsWrapperComponent } from './dog-friends-wrapper.component';

describe('DogFriendsWrapperComponent', () => {
  let component: DogFriendsWrapperComponent;
  let fixture: ComponentFixture<DogFriendsWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogFriendsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogFriendsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
