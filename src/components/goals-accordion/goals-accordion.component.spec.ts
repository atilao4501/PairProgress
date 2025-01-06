import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsAccordionComponent } from './goals-accordion.component';

describe('GoalsAccordionComponent', () => {
  let component: GoalsAccordionComponent;
  let fixture: ComponentFixture<GoalsAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoalsAccordionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoalsAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
