import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTrailerComponent } from './card-trailer.component';

describe('CardTrailerComponent', () => {
  let component: CardTrailerComponent;
  let fixture: ComponentFixture<CardTrailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTrailerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardTrailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
