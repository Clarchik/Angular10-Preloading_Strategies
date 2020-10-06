import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecondLazyComponent } from './components/second-lazy.component';

const routes: Routes = [
    { path: '', component: SecondLazyComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SecondLazyRoutingModule { }
