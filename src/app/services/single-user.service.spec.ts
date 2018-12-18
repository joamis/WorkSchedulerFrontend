import { TestBed } from '@angular/core/testing';

import { SingleUserService } from './single-user.service';

describe('SingleUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SingleUserService = TestBed.get(SingleUserService);
    expect(service).toBeTruthy();
  });
});
