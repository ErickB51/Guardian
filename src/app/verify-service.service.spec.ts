import { TestBed } from '@angular/core/testing';

import { VerifyServiceService } from './verify-service.service';

describe('VerifyServiceService', () => {
  let service: VerifyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerifyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
