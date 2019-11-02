import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuExamplePage } from './menu-example.page';

describe('MenuExamplePage', () => {
  let component: MenuExamplePage;
  let fixture: ComponentFixture<MenuExamplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuExamplePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuExamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
