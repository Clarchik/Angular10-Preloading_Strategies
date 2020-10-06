import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { OptInPreloadStrategy } from './strategies/optin-preaload-stategy';
import { OnDemandPreloadStrategy } from './strategies/predictive-preload-strategy';

const routes: Routes = [
    {
        path: 'lazy-one',
        loadChildren: () => import('./modules/first-lazy/first-lazy.module').then(m => m.FirstLazyModule),
        data: { preload: true }
    },
    {
        path: 'lazy-two',
        loadChildren: () => import('./modules/second-lazy-module/second-lazy.module').then(m => m.SecondLazyModule),
        data: { preload: true }
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: OnDemandPreloadStrategy })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
