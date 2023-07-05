import { TestBed } from '@angular/core/testing';

import { ProductStorageListService } from './product-storage-list.service';

describe('ProductStorageListService', () => {
  let service: ProductStorageListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductStorageListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
