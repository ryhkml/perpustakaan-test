import { TestBed } from '@angular/core/testing';

import { IntroductionGuard } from './introduction.guard';

describe('IntroductionGuard', () => {
  let guard: IntroductionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IntroductionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
