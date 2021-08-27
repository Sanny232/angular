import { TestBed } from '@angular/core/testing';

import { GamePageResolver } from './game-page.resolver';

describe('GamePageResolver', () => {
  let resolver: GamePageResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GamePageResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
