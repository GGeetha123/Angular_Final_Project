import { TestBed } from '@angular/core/testing';

import { ProductColorslistService } from './product-colorslist.service';

describe('ProductColorslistService', () => {
  let service: ProductColorslistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductColorslistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
