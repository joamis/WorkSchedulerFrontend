import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateScheduleComponent } from './calculate-schedule.component';

describe('CalculateScheduleComponent', () => {
  let component: CalculateScheduleComponent;
  let fixture: ComponentFixture<CalculateScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculateScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
