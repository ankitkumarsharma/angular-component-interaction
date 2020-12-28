import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputBasedRoutingModule } from './input-based-routing.module';
import { InputBasedComponent } from './input-based.component';


@NgModule({
  declarations: [InputBasedComponent],
  imports: [
    CommonModule,
    InputBasedRoutingModule
  ]
})
export class InputBasedModule { }
