import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class OnDemandOptions {
    constructor(public routePath: string, public preload: boolean = true) { }
}

@Injectable({ providedIn: 'root' })
export class OnDemandService {
    private subject = new Subject<OnDemandOptions>();
    state = this.subject.asObservable();
    constructor() { }

    public startPreload(routePath: string): void {
        const message = new OnDemandOptions(routePath, true);
        this.subject.next(message);
    }

}
