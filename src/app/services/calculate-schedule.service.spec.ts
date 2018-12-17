import { TestBed } from '@angular/core/testing';

import { CalculateScheduleService } from './calculate-schedule.service';

describe('CalculateScheduleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculateScheduleService = TestBed.get(CalculateScheduleService);
    expect(service).toBeTruthy();
  });
});
