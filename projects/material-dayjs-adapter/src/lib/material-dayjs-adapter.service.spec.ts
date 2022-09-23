import { TestBed } from '@angular/core/testing';

import { MaterialDayjsAdapterService } from './material-dayjs-adapter.service';

describe('MaterialDayjsAdapterService', () => {
  let service: MaterialDayjsAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialDayjsAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
