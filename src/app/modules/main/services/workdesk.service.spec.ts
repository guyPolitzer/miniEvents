import { TestBed } from '@angular/core/testing';

import { WorkdeskService } from './workdesk.service';

describe('WorkdeskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkdeskService = TestBed.get(WorkdeskService);
    expect(service).toBeTruthy();
  });
});
