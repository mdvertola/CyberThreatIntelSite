import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationalIntelligenceComponent } from './operational-intelligence.component';

describe('OperationalIntelligenceComponent', () => {
  let component: OperationalIntelligenceComponent;
  let fixture: ComponentFixture<OperationalIntelligenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationalIntelligenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationalIntelligenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
