import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultCoordinationComponent } from './consult-coordination.component';

describe('ConsultCoordinationComponent', () => {
  let component: ConsultCoordinationComponent;
  let fixture: ComponentFixture<ConsultCoordinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultCoordinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultCoordinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
