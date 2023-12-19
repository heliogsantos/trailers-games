import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundIconBorderComponent } from './round-icon-border.component';

describe('RoundIconBorderComponent', () => {
  let component: RoundIconBorderComponent;
  let fixture: ComponentFixture<RoundIconBorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoundIconBorderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoundIconBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
