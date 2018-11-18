import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyTimetableComponent } from './ready-timetable.component';

describe('ReadyTimetableComponent', () => {
  let component: ReadyTimetableComponent;
  let fixture: ComponentFixture<ReadyTimetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadyTimetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadyTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
