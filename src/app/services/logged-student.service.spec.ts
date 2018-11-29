import { TestBed } from '@angular/core/testing';

import { LoggedStudentService } from './logged-student.service';

describe('LoggedStudentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoggedStudentService = TestBed.get(LoggedStudentService);
    expect(service).toBeTruthy();
  });
});
