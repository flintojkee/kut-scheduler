import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginService } from '@kut/auth/shared/login.service';

@Component({
  selector: 'kut-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss', '../../shared/styles/auth-pages.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordRequestForm: FormGroup;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.resetPasswordRequestForm = this.loginService.createResetPasswordRequestForm();
  }

  get email() {
    return this.resetPasswordRequestForm.controls['email'];
  }

  onSubmit() {
    if (this.resetPasswordRequestForm.invalid) {
      Object.keys(this.resetPasswordRequestForm.controls).map((key) => {
        this.resetPasswordRequestForm.controls[key].markAsDirty();
        this.resetPasswordRequestForm.controls[key].markAsTouched();
      });
    }
  }

}
