import { TestBed } from '@angular/core/testing';

import { FriendsLocalStorageService } from './friends-local-storage.service';

describe('FriendsLocalStorageService', () => {
  let service: FriendsLocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FriendsLocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
