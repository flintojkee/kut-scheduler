import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '@root/app/core/services';
import { UserRegister } from '@root/app/shared/models';
import { LoginService } from '@root/app/auth/shared/login.service';

@Component({
  selector: 'kut-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss', '../../shared/styles/auth-pages.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  isFormConfirmed: boolean;
  constructor(private authService: AuthService, private loginService: LoginService) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.signupForm = this.loginService.createSignUpForm();
  }

  get f() {
    return this.signupForm.controls;
  }

  get fullName() {
    return this.signupForm.controls['fullName'];
  }

  get email() {
    return this.signupForm.controls['email'];
  }

  get password() {
    return this.signupForm.controls['password'];
  }

  get retypedPassword() {
    return this.signupForm.controls['retypedPassword'];
  }

  get terms() {
    return this.signupForm.controls['terms'];
  }

  onSubmit() {
    if (this.signupForm.invalid) {
      Object.keys(this.signupForm.controls).map((key) => {
        this.signupForm.controls[key].markAsDirty();
        this.signupForm.controls[key].markAsTouched();
      });
      return;
    } else {
      const user = this.loginService.trimStringFields<UserRegister>(
        new UserRegister(this.fullName.value, this.email.value, this.password.value, this.retypedPassword.value)
      );
      this.authService.signUp(user).subscribe((res) => {
        console.log(res);
      });
    }
  }
}
