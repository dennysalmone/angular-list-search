import { TestBed } from '@angular/core/testing';

import { MockRequestService } from './mock-request.service';

describe('MockRequestService', () => {
  let service: MockRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
