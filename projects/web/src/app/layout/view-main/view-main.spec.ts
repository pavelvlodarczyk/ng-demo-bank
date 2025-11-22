import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMain } from './view-main';

describe('ViewMain', () => {
  let component: ViewMain;
  let fixture: ComponentFixture<ViewMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
