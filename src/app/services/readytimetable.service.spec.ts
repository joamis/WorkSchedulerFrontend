import { TestBed } from '@angular/core/testing';

import { ReadytimetableService } from './readytimetable.service';

describe('ReadytimetableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReadytimetableService = TestBed.get(ReadytimetableService);
    expect(service).toBeTruthy();
  });
});
