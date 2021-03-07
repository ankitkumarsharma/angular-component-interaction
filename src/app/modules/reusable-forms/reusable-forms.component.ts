import { CONTACT_HEADER } from './core/reusable-forms.constant';
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
  formData: any;
  constructor() { }

  ngOnInit(): void {
  }
  onReceiveFormGroup(e:any){
    this.formData = e;
  }
  onSubmit(){
    console.log(this.formData.value)
  }
}
