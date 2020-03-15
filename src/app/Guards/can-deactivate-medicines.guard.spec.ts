import { TestBed, async, inject } from '@angular/core/testing';

import { CanDeactivateMedicinesGuard } from './can-deactivate-medicines.guard';

describe('CanDeactivateMedicinesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanDeactivateMedicinesGuard]
    });
  });

  it('should ...', inject([CanDeactivateMedicinesGuard], (guard: CanDeactivateMedicinesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
