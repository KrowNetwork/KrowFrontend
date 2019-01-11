import { TestBed, inject } from '@angular/core/testing';

import { CompareService } from './shared/service/compare.service';

describe('CompareService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompareService]
    });
  });

  it('should be created', inject([CompareService], (service: CompareService) => {
    expect(service).toBeTruthy();
  }));
});
