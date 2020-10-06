import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstLazyComponent } from './first-lazy.component';

const routes: Routes = [{ path: '', component: FirstLazyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstLazyRoutingModule { }
