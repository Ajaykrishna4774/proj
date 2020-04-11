import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateIopDetailsComponent } from './update-iop-details.component';

describe('UpdateIopDetailsComponent', () => {
  let component: UpdateIopDetailsComponent;
  let fixture: ComponentFixture<UpdateIopDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateIopDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateIopDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
