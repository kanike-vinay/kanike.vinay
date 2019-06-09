import { TestBed } from '@angular/core/testing';

import { UpdateViewService } from './update-view.service';

describe('UpdateViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateViewService = TestBed.get(UpdateViewService);
    expect(service).toBeTruthy();
  });
});
