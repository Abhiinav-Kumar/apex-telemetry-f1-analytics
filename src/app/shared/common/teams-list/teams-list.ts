import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-teams-list',
  imports: [],
  templateUrl: './teams-list.html',
  styleUrl: './teams-list.scss',
})
export class TeamsListComponent {
  @Input() teams: any[] = [];
}
