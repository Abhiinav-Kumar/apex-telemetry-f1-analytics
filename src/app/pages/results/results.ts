import { Component } from '@angular/core';
import { DriversListComponent } from "../../shared/common/drivers-list/drivers-list.component";
import { TeamsListComponent } from '../../shared/common/teams-list/teams-list';

@Component({
    selector: 'app-results',
    imports: [DriversListComponent,TeamsListComponent],
    templateUrl: './results.html',
    styleUrl: './results.scss',
})
export class Results {
}
