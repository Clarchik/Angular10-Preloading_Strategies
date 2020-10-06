import { Component } from '@angular/core';
import { OnDemandService } from './strategies/on-demand.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Angular10-PreloadingStrategies';
    links = ['lazy-one', 'lazy-two'];
    constructor(private preloadService: OnDemandService) { }

    public preloadBundle(path: string): void {
        this.preloadService.startPreload(path);
    }
}
