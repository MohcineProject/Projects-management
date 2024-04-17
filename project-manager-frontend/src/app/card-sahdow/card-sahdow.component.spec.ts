import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSahdowComponent } from './card-sahdow.component';

describe('CardSahdowComponent', () => {
  let component: CardSahdowComponent;
  let fixture: ComponentFixture<CardSahdowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSahdowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardSahdowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
