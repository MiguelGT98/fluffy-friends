import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogTinderComponent } from './dog-tinder.component';

describe('DogTinderComponent', () => {
  let component: DogTinderComponent;
  let fixture: ComponentFixture<DogTinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogTinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogTinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
