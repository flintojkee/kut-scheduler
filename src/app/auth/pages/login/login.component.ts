import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '@root/app/auth/shared/login.service';
import { SocialUser } from 'angularx-social-login';

@Component({
  selector: 'kut-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../shared/styles/auth-pages.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user: SocialUser;

  constructor(
    private router: Router,
    private loginService: LoginService,
  ) {}

  ngOnInit() {

  }

  signInWithGoogle(): void {
  }

  signOut(): void {
  }

  createForm() {
    this.loginForm = this.loginService.createLoginForm();
  }

  get f() {
    return this.loginForm.controls;
  }

  get email() {
    return this.loginForm.controls['email'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }

  get remember() {
    return this.loginForm.controls['remember'];
  }

  // onSubmit() {
  //   if (this.loginForm.invalid) {
  //     Object.keys(this.loginForm.controls).map((key) => {
  //       this.loginForm.controls[key].markAsDirty();
  //       this.loginForm.controls[key].markAsTouched();
  //     });
  //   } else {
  //     const user = this.loginService.trimStringFields<UserLoginCheck>(
  //       new UserLoginCheck(this.email.value, this.password.value)
  //     );
  //     this.authService
  //       .login(user)
  //       .pipe(first())
  //       .subscribe(
  //         (data) => {
  //           this.router.navigate(['/home']);
  //         },
  //         (error) => {}
  //       );
  //   }
  // }
}
