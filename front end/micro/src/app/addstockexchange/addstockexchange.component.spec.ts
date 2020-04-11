import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstockexchangeComponent } from './addstockexchange.component';

describe('AddstockexchangeComponent', () => {
  let component: AddstockexchangeComponent;
  let fixture: ComponentFixture<AddstockexchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstockexchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstockexchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
