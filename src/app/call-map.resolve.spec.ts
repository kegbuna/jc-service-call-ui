import { TestBed, inject } from '@angular/core/testing';

import { CallMapService } from './call-map.resolve';

describe('CallMapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CallMapService]
    });
  });

  it('should be created', inject([CallMapService], (service: CallMapService) => {
    expect(service).toBeTruthy();
  }));
});
