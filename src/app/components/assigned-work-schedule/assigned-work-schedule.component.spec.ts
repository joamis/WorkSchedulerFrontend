import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedWorkScheduleComponent } from './assigned-work-schedule.component';

describe('AssignedWorkScheduleComponent', () => {
  let component: AssignedWorkScheduleComponent;
  let fixture: ComponentFixture<AssignedWorkScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignedWorkScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedWorkScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
