import { Component } from '@angular/core';
import { LoadingService } from '../../services/loading.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [NgClass],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css',
})
export class LoadingComponent {
  constructor(public loadingService: LoadingService) {}
}
