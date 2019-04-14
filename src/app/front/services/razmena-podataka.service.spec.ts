import { TestBed } from '@angular/core/testing';

import { RazmenaPodatakaService } from './razmena-podataka.service';

describe('RazmenaPodatakaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RazmenaPodatakaService = TestBed.get(RazmenaPodatakaService);
    expect(service).toBeTruthy();
  });
});
