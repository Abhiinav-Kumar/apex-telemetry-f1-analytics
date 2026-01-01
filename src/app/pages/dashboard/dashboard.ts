import { Component } from '@angular/core';
import { DateDisplayPipe } from "../../shared/pipes/date-display.pipe";
import { TimeDisplayPipe } from "../../shared/pipes/time-display.pipe";
import { ApiService } from '../../services/services';
import { NextGP } from '../../models/next-gp-model';

@Component({
  selector: 'app-dashboard',
  imports: [DateDisplayPipe, TimeDisplayPipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})  
export class Dashboard {
  public nextGP: NextGP | null = null;

  constructor(
    private apiService: ApiService,
  ) {}

  ngOnInit(): void {
    this.loadNextGP();
  }

  loadNextGP(): void {
    this.apiService.getNextGP().subscribe({
      next: (data) => {
        this.nextGP = data;
      },
      error: (err) => {
        console.error('Failed to load next GP', err);
      }
    });
  }

}
