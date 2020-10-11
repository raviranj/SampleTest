import { TestBed } from '@angular/core/testing';

import { PassengerFormService } from './passenger-form.service';

describe('PassengerFormService', () => {
  let service: PassengerFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassengerFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
