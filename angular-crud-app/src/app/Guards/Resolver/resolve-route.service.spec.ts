import { TestBed } from '@angular/core/testing';

import { ResolveRouteService } from './resolve-route.service';

describe('ResolveRouteService', () => {
  let service: ResolveRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolveRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
