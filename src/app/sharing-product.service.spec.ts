import { TestBed } from '@angular/core/testing';

import { SharingProductService } from './sharing-product.service';

describe('SharingProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharingProductService = TestBed.get(SharingProductService);
    expect(service).toBeTruthy();
  });
});
