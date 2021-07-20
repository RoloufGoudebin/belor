import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenseignementsComponent } from './renseignements.component';

describe('RenseignementsComponent', () => {
  let component: RenseignementsComponent;
  let fixture: ComponentFixture<RenseignementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenseignementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenseignementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
