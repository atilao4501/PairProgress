import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotStatusComponent } from './mascot-status.component';

describe('MascotStatusComponent', () => {
  let component: MascotStatusComponent;
  let fixture: ComponentFixture<MascotStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MascotStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MascotStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
