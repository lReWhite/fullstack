import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablePage } from './observable.page';

describe('ObservablePage', () => {
  let component: ObservablePage;
  let fixture: ComponentFixture<ObservablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservablePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
