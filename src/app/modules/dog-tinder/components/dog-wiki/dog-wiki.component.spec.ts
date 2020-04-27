import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogWikiComponent } from './dog-wiki.component';

describe('DogWikiComponent', () => {
  let component: DogWikiComponent;
  let fixture: ComponentFixture<DogWikiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogWikiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogWikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
