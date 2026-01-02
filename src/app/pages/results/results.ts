import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common'; // Usually needed
import { DriversListComponent } from "../../shared/common/drivers-list/drivers-list.component";
import { TeamsListComponent } from '../../shared/common/teams-list/teams-list';
import { SessionFilterComponent } from '../../shared/common/session-filter/session-filter.component';
import { ApiService } from '../../services/api.services';
import { DriverInfo } from '../../models/driver-info-model';

@Component({
    selector: 'app-results',
    imports: [CommonModule, DriversListComponent, TeamsListComponent, SessionFilterComponent],
    templateUrl: './results.html',
    styleUrl: './results.scss',
})
export class Results {
    drivers: DriverInfo[] = [];

    constructor(
        private apiService: ApiService,
        private cdr: ChangeDetectorRef
    ) { }

    fetchDrivers(filter: { year: number, gp: string, session: string }) {
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
    }
}
