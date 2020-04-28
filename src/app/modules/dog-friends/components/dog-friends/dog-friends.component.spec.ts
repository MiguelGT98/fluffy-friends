import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogFriendsComponent } from './dog-friends.component';

describe('DogFriendsComponent', () => {
  let component: DogFriendsComponent;
  let fixture: ComponentFixture<DogFriendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogFriendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
