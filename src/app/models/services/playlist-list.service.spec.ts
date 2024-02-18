import { TestBed } from '@angular/core/testing';

import { PlaylistListService } from './playlist-list.service';

describe('PlaylistListService', () => {
  let service: PlaylistListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaylistListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
