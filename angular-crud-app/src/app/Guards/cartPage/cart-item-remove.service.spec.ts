import { TestBed } from '@angular/core/testing';

import { CartItemRemoveService } from './cart-item-remove.service';

describe('CartItemRemoveService', () => {
  let service: CartItemRemoveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartItemRemoveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
