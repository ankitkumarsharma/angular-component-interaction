import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutputBasedRoutingModule } from './output-based-routing.module';
import { OutputBasedComponent } from './output-based.component';


@NgModule({
  declarations: [OutputBasedComponent],
  imports: [
    CommonModule,
    OutputBasedRoutingModule
  ]
})
export class OutputBasedModule { }
