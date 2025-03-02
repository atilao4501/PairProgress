import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalDetailedPageComponent } from './goal-detailed-page.component';

describe('GoalDetailedPageComponent', () => {
  let component: GoalDetailedPageComponent;
  let fixture: ComponentFixture<GoalDetailedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoalDetailedPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoalDetailedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
