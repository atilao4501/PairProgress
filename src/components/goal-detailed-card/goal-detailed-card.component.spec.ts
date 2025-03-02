import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalDetailedCardComponent } from './goal-detailed-card.component';

describe('GoalDetailedCardComponent', () => {
  let component: GoalDetailedCardComponent;
  let fixture: ComponentFixture<GoalDetailedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoalDetailedCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoalDetailedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
