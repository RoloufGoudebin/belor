import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultanceComponent } from './consultance.component';

describe('ConsultanceComponent', () => {
  let component: ConsultanceComponent;
  let fixture: ComponentFixture<ConsultanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
