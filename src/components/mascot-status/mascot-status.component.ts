import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-mascot-status',
  standalone: true,
  imports: [],
  templateUrl: './mascot-status.component.html',
  styleUrl: './mascot-status.component.css',
  animations: [
    trigger('fadeInOut', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('visible <=> hidden', [animate('0s')]),
    ]),
  ],
})
export class MascotStatusComponent implements OnInit {
  public imageName = 'angryMascot';
  public firstImageState = 'visible';
  public secondImageState = 'hidden';
  public firstImageId = 'noOpacity';
  public secondImageId = 'normalOpacity';
  public number = 0;

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.ngZone.run(() => {
          this.changeOpacity();
        });
      }, 2000);
    });
  }

  toggleImageStates() {
    this.firstImageState =
      this.firstImageState === 'visible' ? 'hidden' : 'visible';
    this.secondImageState =
      this.secondImageState === 'visible' ? 'hidden' : 'visible';
  }

  changeOpacity() {
    this.firstImageId =
      this.firstImageId === 'normalOpacity' ? 'noOpacity' : 'normalOpacity';
    this.secondImageId =
      this.secondImageId === 'normalOpacity' ? 'noOpacity' : 'normalOpacity';
  }
}
