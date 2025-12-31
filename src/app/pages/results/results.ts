import { Component } from '@angular/core';
import { DriversListComponent } from "../../shared/common/drivers-list/drivers-list.component";

@Component({
    selector: 'app-results',
    imports: [DriversListComponent],
    templateUrl: './results.html',
    styleUrl: './results.scss',
})
export class Results {
}
