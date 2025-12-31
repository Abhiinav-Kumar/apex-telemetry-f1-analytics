
import { Injectable, signal, computed, WritableSignal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoaderService {
    private _loading: WritableSignal<boolean> = signal(false);
    private requestCount = 0;

    readonly loading = computed(() => this._loading());

    show() {
        this.requestCount++;
        if (this.requestCount > 0) {
            this._loading.set(true);
        }
    }

    hide() {
        this.requestCount--;
        if (this.requestCount <= 0) {
            this.requestCount = 0;
            this._loading.set(false);
        }
    }
}
