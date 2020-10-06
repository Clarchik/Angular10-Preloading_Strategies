import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { OnDemandOptions, OnDemandService } from './on-demand.service';

@Injectable({ providedIn: 'root' })
export class OnDemandPreloadStrategy implements PreloadingStrategy {
    private preloadOnDemand$: Observable<OnDemandOptions>;
    constructor(private onDemandService: OnDemandService) {
        this.preloadOnDemand$ = this.onDemandService.state;
    }

    preload(route: Route, load: () => Observable<any>): Observable<any> {
        return this.preloadOnDemand$.pipe(
            mergeMap(options => {
                const shouldPreload = this.preloadCheck(route, options);
                return shouldPreload ? load() : EMPTY;
            })
        );
    }

    private preloadCheck(route: Route, options: OnDemandOptions): boolean {
        return route.data && route.data.preload && [route.path, '*'].includes(options.routePath) && options.preload;
    }
}
