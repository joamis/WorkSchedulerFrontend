import { TestBed } from '@angular/core/testing';

import { SingleStudentService } from './single-student.service';

describe('SingleStudentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SingleStudentService = TestBed.get(SingleStudentService);
    expect(service).toBeTruthy();
  });
});
