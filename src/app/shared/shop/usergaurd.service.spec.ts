import { TestBed } from '@angular/core/testing';

import { UsergaurdService } from './usergaurd.service';

describe('UsergaurdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsergaurdService = TestBed.get(UsergaurdService);
    expect(service).toBeTruthy();
  });
});
