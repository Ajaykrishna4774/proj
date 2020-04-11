import { TestBed } from '@angular/core/testing';

import { IpodetailsService } from './ipodetails.service';

describe('IpodetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IpodetailsService = TestBed.get(IpodetailsService);
    expect(service).toBeTruthy();
  });
});
