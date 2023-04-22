/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { SerieRequestService } from './serieRequest.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: SerieRequest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SerieRequestService]
    });
  });

  it('should ...', inject([SerieRequestService], (service: SerieRequestService) => {
    expect(service).toBeTruthy();
  }));
});
