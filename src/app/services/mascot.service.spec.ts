import { TestBed } from '@angular/core/testing';

import { MascotService } from './mascot.service';

describe('MascotService', () => {
  let service: MascotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MascotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
