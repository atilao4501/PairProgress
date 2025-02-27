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
import { MascotStatusProperties } from '../../interfaces/dashboard/mascotStatusProperties';
import { MascotService } from '../../app/services/mascot.service';

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
  constructor(
    private ngZone: NgZone,
    private apiService: ApiService,
    private loadingService: LoadingService,
    public mascotService: MascotService
  ) {}

  async ngOnInit() {
    this.mascotService.getBuddyImage();

    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.ngZone.run(() => {
          this.mascotService.changeMascotOpacity();
        });
      }, 1000);
    });
  }
}
