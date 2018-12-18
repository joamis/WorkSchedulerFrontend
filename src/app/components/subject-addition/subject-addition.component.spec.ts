import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectAdditionComponent } from './subject-addition.component';

describe('SubjectAdditionComponent', () => {
  let component: SubjectAdditionComponent;
  let fixture: ComponentFixture<SubjectAdditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectAdditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
