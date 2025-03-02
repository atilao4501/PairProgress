import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewContributionCardComponent } from './new-contribution-card.component';

describe('NewContributionCardComponent', () => {
  let component: NewContributionCardComponent;
  let fixture: ComponentFixture<NewContributionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewContributionCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewContributionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
