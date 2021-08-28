import { TestBed } from '@angular/core/testing';

import { SearchFriendService } from './search-friend.service';

describe('SearchFriendService', () => {
  let service: SearchFriendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchFriendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
