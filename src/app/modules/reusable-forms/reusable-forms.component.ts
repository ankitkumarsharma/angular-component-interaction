import { CONTACT_HEADER } from './../view-child-based/core/view-child-based.constant';
import { Component, OnInit } from '@angular/core';
import { LOGIN_FORM } from './core/form.config';

@Component({
  selector: 'app-reusable-forms',
  templateUrl: './reusable-forms.component.html',
  styleUrls: ['./reusable-forms.component.scss']
})
export class ReusableFormsComponent implements OnInit {
  contactData = CONTACT_HEADER;
  formConfig = LOGIN_FORM;
  constructor() { }

  ngOnInit(): void {
  }
  onReceiveFormGroup(e:any){
    console.log(e.value)
  }
}
