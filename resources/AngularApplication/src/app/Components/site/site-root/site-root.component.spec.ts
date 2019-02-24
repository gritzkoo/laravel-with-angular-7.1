import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteRootComponent } from './site-root.component';

describe('SiteRootComponent', () => {
  let component: SiteRootComponent;
  let fixture: ComponentFixture<SiteRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
