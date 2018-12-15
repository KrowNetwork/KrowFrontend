import { TestBed, inject } from '@angular/core/testing';

import { GcTalentService } from './gc-talent.service';

describe('GcTalentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GcTalentService]
    });
  });

  it('should be created', inject([GcTalentService], (service: GcTalentService) => {
    expect(service).toBeTruthy();
  }));
});
