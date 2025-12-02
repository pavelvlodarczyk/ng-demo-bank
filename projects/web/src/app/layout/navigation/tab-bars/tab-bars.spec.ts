import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabBars } from './tab-bars';

describe('TabBars', () => {
  let component: TabBars;
  let fixture: ComponentFixture<TabBars>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabBars]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabBars);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
