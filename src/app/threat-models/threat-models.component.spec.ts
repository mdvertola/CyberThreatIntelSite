import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreatModelsComponent } from './threat-models.component';

describe('ThreatModelsComponent', () => {
  let component: ThreatModelsComponent;
  let fixture: ComponentFixture<ThreatModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreatModelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreatModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
