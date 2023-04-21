/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SerieRequestService } from './serieRequest.service';

describe('Service: SerieRequest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SerieRequestService]
    });
  });

  it('should ...', inject([SerieRequestService], (service: SerieRequestService) => {
    expect(service).toBeTruthy();
  }));
});
