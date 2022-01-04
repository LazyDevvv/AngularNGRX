/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CategoryHttpDispatchersService } from './category-http-dispatchers.service';

describe('Service: CategoryHttpDispatchers', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryHttpDispatchersService]
    });
  });

  it('should ...', inject([CategoryHttpDispatchersService], (service: CategoryHttpDispatchersService) => {
    expect(service).toBeTruthy();
  }));
});
