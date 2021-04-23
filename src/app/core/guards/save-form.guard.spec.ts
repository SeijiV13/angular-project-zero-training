import { TestBed } from '@angular/core/testing';

import { SaveFormGuard } from './save-form.guard';

describe('SaveFormGuard', () => {
  let guard: SaveFormGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SaveFormGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
