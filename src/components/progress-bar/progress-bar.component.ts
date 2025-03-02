import { CommonModule, NgClass } from '@angular/common';
import { Component, Input, NgZone } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [NgClass, CommonModule],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css',
})
export class ProgressBarComponent implements OnInit {
  @Input() public goal: number = 0;
  @Input() public currentAmount: number = 0; // The current progress value
  public progressValue: number = 0; // The animated progress value

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.startAnimation(); // Start the animation when the component initializes
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.ngZone.run(() => {});
      }, 1000); // Update every second
    });
  }

  // Starts the animation from 0 to the determined progress percentage
  private startAnimation(): void {
    const target = this.getPercentage(); // Calculate the target percentage
    const animationDuration = 2000; // Total animation duration in ms
    const interval = 20; // Interval between updates in ms
    const steps = animationDuration / interval; // Total number of steps
    const increment = target / steps; // Value to increment in each step

    this.progressValue = 0; // Ensure the animation starts at 0

    this.ngZone.runOutsideAngular(() => {
      const animation = setInterval(() => {
        this.ngZone.run(() => {
          if (this.progressValue < target) {
            this.progressValue = Math.min(
              this.progressValue + increment,
              target
            ); // Increment value step by step
          } else {
            clearInterval(animation); // Stop the animation once the target is reached
          }
        });
      }, interval);
    });
  }

  // Calculate the percentage progress based on the goal and current amount
  public getPercentage(): number {
    return (this.currentAmount / this.goal) * 100;
  }

  // Generate the color dynamically based on the animated progress percentage
  public getColor(): string {
    const percentage = this.progressValue;

    // Transition from dark red to dark green
    const red =
      percentage < 50
        ? Math.floor(139 + (50 - percentage) * 2) // Dark red at lower percentages
        : Math.floor(139 - (percentage - 50) * 2); // Decrease red as percentage increases
    const green =
      percentage > 50
        ? Math.floor(50 + (percentage - 50) * 4.1) // Dark green at higher percentages
        : Math.floor(percentage * 4.1); // Increase green as percentage increases
    const blue = 0; // Blue remains constant

    // Ensure values are within the 0-255 range
    const validRed = Math.min(255, Math.max(0, red));
    const validGreen = Math.min(255, Math.max(0, green));

    return `rgb(${validRed}, ${validGreen}, ${blue})`;
  }
}
