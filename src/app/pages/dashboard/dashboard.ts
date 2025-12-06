import { Component } from '@angular/core';
import { DriverInfo } from '../../models/driver-info-model';
import { PerformanceMetrics } from '../../models/performance-metrics-model';
import { SectorTimes } from '../../models/sector-time-model';
import { TyreStatus } from '../../models/tyre-status-model';
import { SessionSummary } from '../../models/session-summary-model';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

  driverInfo: DriverInfo = {
    name: 'Max Verstappen',
    team: 'Red Bull Racing',
    carNumber: 1,
    tyreCompound: 'Soft',
    currentLap: 12,
    session: 'Race'
  };

  metrics: PerformanceMetrics = {
    speed: 312,
    gear: 7,
    throttle: 86,
    brake: 0,
    rpm: 11300
  };

  sectors: SectorTimes = {
    sector1: 29.324,
    sector2: 34.221,
    sector3: 27.889,
    lastLap: 1.31,
    bestLap: 1.29,
    delta: +0.22
  };

  tyres: TyreStatus = {
    tempFL: 102,
    tempFR: 105,
    tempRL: 98,
    tempRR: 99,
    wearFL: 12,
    wearFR: 14,
    wearRL: 8,
    wearRR: 9
  };

  session: SessionSummary = {
    sessionType: 'Race',
    remainingTime: '48:12',
    trackTemp: 39,
    airTemp: 27
  };

}
