import { TestBed } from '@angular/core/testing';

import { SingleSubjectService } from './single-subject.service';

describe('SingleSubjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SingleSubjectService = TestBed.get(SingleSubjectService);
    expect(service).toBeTruthy();
  });
});
