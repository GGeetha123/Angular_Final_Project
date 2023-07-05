import { TestBed } from '@angular/core/testing';

import { ProductImageslistService } from './product-imageslist.service';

describe('ProductImageslistService', () => {
  let service: ProductImageslistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductImageslistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
