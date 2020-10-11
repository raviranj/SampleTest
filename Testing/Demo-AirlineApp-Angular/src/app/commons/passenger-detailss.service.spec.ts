import { TestBed } from '@angular/core/testing';

import { PassengerDetailssService } from './passenger-detailss.service';

describe('PassengerDetailssService', () => {
  let service: PassengerDetailssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassengerDetailssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
