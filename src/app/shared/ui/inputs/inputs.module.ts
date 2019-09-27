import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from './input/input.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [InputComponent, CheckboxComponent, ButtonComponent],
  exports: [InputComponent, CheckboxComponent, ButtonComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class InputsModule {}
