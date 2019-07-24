import { TestBed } from '@angular/core/testing';

import { ErrorMSGService } from './error-msg.service';

describe('ErrorMSGService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorMSGService = TestBed.get(ErrorMSGService);
    expect(service).toBeTruthy();
  });
});
