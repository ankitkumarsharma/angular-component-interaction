import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AkTitleComponent } from './forms/ak-title/ak-title.component';
import { AkBodyComponent } from './forms/ak-body/ak-body.component';
import { AkFormComponent } from './forms/ak-form/ak-form.component';
import { AkFormElementsComponent } from './forms/ak-form-elements/ak-form-elements.component';


@NgModule({
  declarations: [PageNotFoundComponent, HeaderComponent, FooterComponent, ContactComponent, AkTitleComponent, AkBodyComponent, AkFormComponent, AkFormElementsComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    HeaderComponent, FooterComponent, ContactComponent
  ]
})
export class SharedModule { }
