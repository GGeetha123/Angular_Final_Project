import { TestBed } from '@angular/core/testing';

import { ProductFeatureslistService } from './product-featureslist.service';

describe('ProductFeatureslistService', () => {
  let service: ProductFeatureslistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductFeatureslistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
