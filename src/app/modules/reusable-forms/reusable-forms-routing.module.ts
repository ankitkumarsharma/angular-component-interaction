import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReusableFormsComponent } from './reusable-forms.component';

const routes: Routes = [{ path: '', component: ReusableFormsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReusableFormsRoutingModule { }
