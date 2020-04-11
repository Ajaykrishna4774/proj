import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteipoComponent } from './deleteipo.component';

describe('DeleteipoComponent', () => {
  let component: DeleteipoComponent;
  let fixture: ComponentFixture<DeleteipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
