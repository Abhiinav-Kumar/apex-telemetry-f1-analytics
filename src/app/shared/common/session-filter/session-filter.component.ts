import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api.services';
import { EventSummary } from '../../../models/event-summary-model';
import { ViewStateService } from '../../../services/view-state.service';

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

    constructor(
        private apiService: ApiService,
        public viewState: ViewStateService
    ) { }

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

    onLoadData() {
        this.loadDrivers.emit({
            year: this.year,
            gp: this.gp,
            session: this.sessionType
        });
    }

    onViewToggle(event: any) {
        // Prevent default checkbox behavior if needed, but [(ngModel)] or (change) is better
        // Using direct click or change handler
        this.viewState.toggleMode();
        // Reset or trigger load? The requirement says "DriversComponent loads automatically"
        // But usually meaningful to clear current data or reload if filters are ready.
        // For now, let the user click Load or auto-load if desired.
        // Requirement: "When toggling ... Data-fetching logic must depend on active view"
        // I'll emit the load event again so parent can decide what to do, OR parent just watches signal?
        // Let's just update state. Parent (Results) will use the state during fetch.
    }
}
