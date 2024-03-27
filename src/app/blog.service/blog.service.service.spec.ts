/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Blog.serviceService } from './blog.service.service';

describe('Service: Blog.service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Blog.serviceService]
    });
  });

  it('should ...', inject([Blog.serviceService], (service: Blog.serviceService) => {
    expect(service).toBeTruthy();
  }));
});
