import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntelligenceBuyInComponent } from './intelligence-buy-in.component';

describe('IntelligenceBuyInComponent', () => {
  let component: IntelligenceBuyInComponent;
  let fixture: ComponentFixture<IntelligenceBuyInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntelligenceBuyInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntelligenceBuyInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
