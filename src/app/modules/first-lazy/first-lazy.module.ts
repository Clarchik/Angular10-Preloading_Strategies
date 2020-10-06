import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstLazyRoutingModule } from './first-lazy-routing.module';
import { FirstLazyComponent } from './first-lazy.component';


@NgModule({
  declarations: [FirstLazyComponent],
  imports: [
    CommonModule,
    FirstLazyRoutingModule
  ]
})
export class FirstLazyModule { }
