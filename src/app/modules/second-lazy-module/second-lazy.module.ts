import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondLazyRoutingModule } from './second-lazy-routing.module';
import { SecondLazyComponent } from './components/second-lazy.component';


@NgModule({
    declarations: [SecondLazyComponent],
    imports: [
        CommonModule,
        SecondLazyRoutingModule
    ]
})
export class SecondLazyModule { }
