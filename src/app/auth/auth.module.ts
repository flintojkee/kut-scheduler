import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent, SignupComponent } from './pages';
import { AuthComponent } from './auth.component';
import { SharedModule } from '@root/app/shared';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';

@NgModule({
  declarations: [AuthComponent, LoginComponent, SignupComponent, ResetPasswordComponent ],
  imports: [CommonModule, AuthRoutingModule, SharedModule]
})
export class AuthModule {}
