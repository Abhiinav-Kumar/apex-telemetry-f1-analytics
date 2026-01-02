import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api.services';
import { EventSummary } from '../../../models/event-summary-model';

@Component({
    selector: 'app-session-filter',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './session-filter.component.html',
    styleUrls: ['./session-filter.component.scss']
})
export class SessionFilterComponent implements OnInit {
    year: number = new Date().getFullYear();
    gp: string = '';
    sessionType: string = 'R'; // Default to Race
    events: EventSummary[] = [];

    @Output() loadDrivers = new EventEmitter<{ year: number, gp: string, session: string }>();

    constructor(private apiService: ApiService) { }

    ngOnInit(): void {
        this.fetchEventsByYear();
    }

    fetchEventsByYear() {
        this.apiService.getEventsByYear(this.year)
            .subscribe({
                next: (data: EventSummary[]) => {
                    this.events = [...data];
                },
                error: (error) => {
                    console.error('Error fetching events:', error);
                }
            });
    }

    onLoadDrivers() {
        this.loadDrivers.emit({
            year: this.year,
            gp: this.gp,
            session: this.sessionType
        });
    }
}
