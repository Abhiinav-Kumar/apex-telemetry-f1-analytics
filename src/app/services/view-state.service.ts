import { Injectable, signal } from '@angular/core';

export type ViewMode = 'drivers' | 'teams';

@Injectable({
    providedIn: 'root'
})
export class ViewStateService {
    readonly viewMode = signal<ViewMode>('drivers');

    constructor() { }

    setMode(mode: ViewMode) {
        this.viewMode.set(mode);
    }

    toggleMode() {
        this.viewMode.update(current => current === 'drivers' ? 'teams' : 'drivers');
    }
}
