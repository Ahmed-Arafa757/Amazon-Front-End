import { TestBed } from '@angular/core/testing';

import { SellerAuthGuardService } from './seller-auth-guard.service';

describe('SellerAuthGuardService', () => {
  let service: SellerAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellerAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
