import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabViews } from './tab-views';

describe('TabViews', () => {
  let component: TabViews;
  let fixture: ComponentFixture<TabViews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabViews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabViews);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
