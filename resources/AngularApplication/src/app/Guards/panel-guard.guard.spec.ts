import { TestBed, async, inject } from '@angular/core/testing';

import { PanelGuardGuard } from './panel-guard.guard';

describe('PanelGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PanelGuardGuard]
    });
  });

  it('should ...', inject([PanelGuardGuard], (guard: PanelGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
