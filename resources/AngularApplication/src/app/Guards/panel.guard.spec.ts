import { TestBed, async, inject } from '@angular/core/testing';

import { PanelGuard } from './panel.guard';

describe('PanelGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PanelGuard]
    });
  });

  it('should ...', inject([PanelGuard], (guard: PanelGuard) => {
    expect(guard).toBeTruthy();
  }));
});
