import { Injectable } from '@angular/core';
import { FormService } from '@root/app/core/services';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OptionalType, fieldsValidators, Login, SignUp, ResetPasswordRequest } from '@root/app/shared/models';
import {
  requiredValidator,
  emailValidator,
  minLengthValidator,
  passwordValidator,
  passwordMatchValidator
} from '@root/app/shared/ui';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private formService: FormService, private formBuilder: FormBuilder) {}

  createLoginForm(): FormGroup {
    const initialValues: OptionalType<Login> = new Login();
    const validators: fieldsValidators<Login> = {
      email: [requiredValidator(), emailValidator()],
      password: [
        requiredValidator(),
        minLengthValidator('Minimum length of password is', 7),
        passwordValidator()
      ],
      remember: [requiredValidator()]
    };

    const controls = this.formService.createFormControls(initialValues, validators);

    return this.formBuilder.group(controls);
  }

  createSignUpForm(): FormGroup {
    const initialValues: OptionalType<SignUp> = new SignUp();
    const validators: fieldsValidators<SignUp> = {
      fullName: [requiredValidator()],
      email: [requiredValidator(), emailValidator()],
      password: [
        requiredValidator(),
        minLengthValidator('Minimum length of password is', 7),
        passwordValidator()
      ],
      retypedPassword: [],
      terms: [requiredValidator()]
    };

    const controls = this.formService.createFormControls(initialValues, validators);

    controls.retypedPassword.setValidators([
      requiredValidator(),
      passwordValidator(),
      passwordMatchValidator(controls.password)
    ]);

    return this.formBuilder.group(controls);
  }

  createResetPasswordRequestForm(): FormGroup {
    const initialValues: OptionalType<ResetPasswordRequest> = new ResetPasswordRequest();
    const validators: fieldsValidators<ResetPasswordRequest> = {
      email: [requiredValidator(), emailValidator()]
    };
    const controls = this.formService.createFormControls(initialValues, validators);
    return this.formBuilder.group(controls);
  }

  trimStringFields<T>(obj: T): T {
    return Object.keys(obj).reduce(
      (trimmedObj, key) => {
        const isString = typeof obj[key] === 'string';
        trimmedObj[key] = isString ? obj[key].trim() : obj[key];
        return trimmedObj;
      },
      {} as T
    );
  }
}
