import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../services/services';
import { DriverInfo } from '../../../models/driver-info-model';
import { LoaderComponent } from '../../loader/loader.component';

@Component({
    selector: 'app-drivers-list',
    standalone: true,
    imports: [CommonModule, FormsModule, LoaderComponent],
    templateUrl: './drivers-list.component.html',
    styleUrl: './drivers-list.component.scss'
})
export class DriversListComponent {
    year: number = new Date().getFullYear();
    gp: string = '';
    sessionType: string = 'R'; // Default to Race
    drivers: DriverInfo[] = [];
    loading: boolean = false;
    fallbackImage = 'assets/images/f1-logo-bg-r.png'; // Using provided url as fallback style for now or generic

    constructor(
        private apiService: ApiService,
        private cdr: ChangeDetectorRef) { }

    fetchDrivers() {
        this.loading = true;
        this.drivers = [];
        this.apiService.getDriversListByYearGpSessionType(this.year, this.gp, this.sessionType)
            .subscribe({
                next: (data: any) => {
                    this.drivers = [...data];
                    this.loading = false;
                    this.cdr.detectChanges();
                },
                error: (error) => {
                    console.error('Error fetching drivers:', error);
                    this.loading = false;
                }
            });
    }

    handleImageError(event: any) {
        event.target.src = 'https://placehold.co/93x93?text=No+Image';
    }
}
