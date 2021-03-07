import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReusableFormsRoutingModule } from './reusable-forms-routing.module';
import { ReusableFormsComponent } from './reusable-forms.component';


@NgModule({
  declarations: [ReusableFormsComponent],
  imports: [
    CommonModule,
    ReusableFormsRoutingModule,
    SharedModule
  ]
})
export class ReusableFormsModule { }
