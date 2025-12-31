import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Telemetry } from './pages/telemetry/telemetry';
import { Comparison } from './pages/comparison/comparison';
import { Live } from './pages/live/live';
import { Sessions } from './pages/sessions/sessions';
import { Results } from './pages/results/results';

export const routes: Routes = [
    { path: 'dashboard', component: Dashboard },
    { path: 'telemetry', component: Telemetry },
    { path: 'comparison', component: Comparison },
    { path: 'live', component: Live },
    { path: 'sessions', component: Sessions },
    { path: 'results', component: Results },

    /* default page */
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

    /* wildcard (optional) */
    { path: '**', redirectTo: '/dashboard' }
];
