import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyInsightsComponent } from './key-insights.component';

describe('KeyInsightsComponent', () => {
  let component: KeyInsightsComponent;
  let fixture: ComponentFixture<KeyInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyInsightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
