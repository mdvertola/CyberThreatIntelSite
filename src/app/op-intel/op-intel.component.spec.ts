import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpIntelComponent } from './op-intel.component';

describe('OpIntelComponent', () => {
  let component: OpIntelComponent;
  let fixture: ComponentFixture<OpIntelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpIntelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpIntelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
