import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BuddyMoodEnum } from '../../interfaces/buddyMoodEnum';

@Injectable({
  providedIn: 'root',
})
export class MascotService {
  public imageName = 'neutralMascot';
  public firstImageState = 'visible';
  public secondImageState = 'hidden';
  public firstImageId = 'noOpacity';
  public secondImageId = 'normalOpacity';
  public number = 0;

  constructor(private apiService: ApiService) {}

  public async getBuddyImage() {
    let actualBuddyMood = await this.apiService.get<BuddyMoodEnum>(
      'Buddy/GetBuddyMood'
    );
    switch (actualBuddyMood.data) {
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

  changeMascotOpacity() {
    this.firstImageId =
      this.firstImageId === 'normalOpacity' ? 'noOpacity' : 'normalOpacity';
    this.secondImageId =
      this.secondImageId === 'normalOpacity' ? 'noOpacity' : 'normalOpacity';
  }
}
