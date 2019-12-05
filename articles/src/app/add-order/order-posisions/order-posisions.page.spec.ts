import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPosisionsPage } from './order-posisions.page';

describe('OrderPosisionsPage', () => {
  let component: OrderPosisionsPage;
  let fixture: ComponentFixture<OrderPosisionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderPosisionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPosisionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
