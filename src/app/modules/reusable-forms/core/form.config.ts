import { Validators } from '@angular/forms';
import { AkFormModel } from './../../../shared/forms/ak-form/core/ak-form.types';
export const LOGIN_FORM: AkFormModel = {
  name: "Login Form",
  groups: [
    {
      columns: 3,
      groupName: 'Login Details',
      controls: [
        {
          labelName: "User Name",
          controlName: "user",
          type: "text",
          validator: []
        },
        {
          labelName: "User Password",
          controlName: "password",
          type: "password",
          validator: []
        }
      ]
    }
  ]
}
