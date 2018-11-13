import { TestBed, inject } from '@angular/core/testing';

import { SaveResumeService } from './save-resume.service';

describe('SaveResumeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaveResumeService]
    });
  });

  it('should be created', inject([SaveResumeService], (service: SaveResumeService) => {
    expect(service).toBeTruthy();
  }));
});
