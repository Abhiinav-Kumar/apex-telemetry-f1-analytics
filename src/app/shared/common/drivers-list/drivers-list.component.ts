import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DriverInfo } from '../../../models/driver-info-model';

@Component({
    selector: 'app-drivers-list',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './drivers-list.component.html',
    styleUrl: './drivers-list.component.scss'
})
export class DriversListComponent {
    @Input() drivers: DriverInfo[] = [];
    fallbackImage = 'assets/images/f1-logo-bg-r.png';
    isLoading = false;

    // No constructor needed if we are just receiving inputs
    // But keeping empty one is fine or just removing it.

    handleImageError(event: any) {
        event.target.src = 'https://placehold.co/93x93?text=No+Image';
    }
}

