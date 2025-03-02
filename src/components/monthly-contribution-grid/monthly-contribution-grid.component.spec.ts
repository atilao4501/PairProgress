import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyContributionGridComponent } from './monthly-contribution-grid.component';

describe('MonthlyContributionGridComponent', () => {
  let component: MonthlyContributionGridComponent;
  let fixture: ComponentFixture<MonthlyContributionGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthlyContributionGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyContributionGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
