import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit, NgZone } from '@angular/core';
import { ApiService } from '../../app/services/api.service';
import { LoadingService } from '../../services/loading.service';
import { ApiResponse } from '../../interfaces/apiResponse';
import { BuddyMoodEnum } from '../../interfaces/buddyMoodEnum';

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
  public imageName = 'neutralMascot';
  public firstImageState = 'visible';
  public secondImageState = 'hidden';
  public firstImageId = 'noOpacity';
  public secondImageId = 'normalOpacity';
  public number = 0;
  private mood: BuddyMoodEnum = 0;

  constructor(
    private ngZone: NgZone,
    private apiService: ApiService,
    private loadingService: LoadingService
  ) {}

  async ngOnInit() {
    try {
      this.loadingService.show();
      let actualBuddyMood = await this.apiService.get<BuddyMoodEnum>(
        'Buddy/GetBuddyMood'
      );
      this.getBuddyImageByMood(actualBuddyMood.data);
      console.log('Mood retrieved successfully' + actualBuddyMood.data);
      this.loadingService.hide();
    } catch (error: any) {
      let apiError = error.error as ApiResponse<string>;
      console.error(apiError.message);
      this.loadingService.hide();
    }

    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.ngZone.run(() => {
          this.changeOpacity();
        });
      }, 1000);
    });
  }

  getBuddyImageByMood(buddyMood: BuddyMoodEnum): void {
    switch (buddyMood) {
      case BuddyMoodEnum.Happy:
        this.imageName = 'happyMascot';
        break;
      case BuddyMoodEnum.Normal:
        this.imageName = 'neutralMascot';
        break;
      case BuddyMoodEnum.Angry:
        this.imageName = 'angryMascot';
        break;
    }
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
