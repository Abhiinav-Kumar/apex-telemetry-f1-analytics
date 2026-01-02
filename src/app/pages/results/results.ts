import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common'; // Usually needed
import { DriversListComponent } from "../../shared/common/drivers-list/drivers-list.component";
import { TeamsListComponent } from '../../shared/common/teams-list/teams-list';
import { SessionFilterComponent } from '../../shared/common/session-filter/session-filter.component';
import { ApiService } from '../../services/api.services';
import { DriverInfo } from '../../models/driver-info-model';
import { ViewStateService } from '../../services/view-state.service';

@Component({
    selector: 'app-results',
    imports: [CommonModule, DriversListComponent, TeamsListComponent, SessionFilterComponent],
    templateUrl: './results.html',
    styleUrl: './results.scss',
})
export class Results {
    drivers: DriverInfo[] = [];
    teams: any[] = []; // Using any for now until Team model is defined/clear
    // Or if TeamsList accepts specific Input type, update accordingly.

    constructor(
        private apiService: ApiService,
        private cdr: ChangeDetectorRef,
        public viewState: ViewStateService
    ) { }

    fetchData(filter: { year: number, gp: string, session: string }) {
        if (this.viewState.viewMode() === 'drivers') {
            this.drivers = [];
            this.apiService.getDriversListByYearGpSessionType(filter.year, filter.gp, filter.session)
                .subscribe({
                    next: (data: any) => {
                        this.drivers = [...data];
                        this.cdr.detectChanges();
                    },
                    error: (error) => {
                        console.error('Error fetching drivers:', error);
                    }
                });
        } else {
            this.teams = [];
            this.apiService.getTeamsListByYearGp(filter.year, filter.gp)
                .subscribe({
                    next: (data: any) => {
                        this.teams = [...data];
                        this.cdr.detectChanges();
                    },
                    error: (error) => {
                        console.error('Error fetching teams:', error);
                    }
                });
        }
    }
}
