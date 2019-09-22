import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { InputModule } from '../input/input.module';
import { ButtonModule } from '../button/button.module';
import { TooltipModule } from '../tooltip/tooltip.module';



@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    InputModule,
    ButtonModule,
    TooltipModule
  ],
  exports: [FormComponent]
})
export class FormModule { }
