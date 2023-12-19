import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoniaIaComponent } from './sonia-ia.component';

describe('SoniaIaComponent', () => {
  let component: SoniaIaComponent;
  let fixture: ComponentFixture<SoniaIaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoniaIaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoniaIaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
