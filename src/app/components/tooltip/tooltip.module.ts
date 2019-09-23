import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './tooltip.component';
import { FormModule } from '../form/form.module';

@NgModule({
  declarations: [TooltipComponent],
  imports: [
    CommonModule
  ],
  exports: [TooltipComponent]
})
export class TooltipModule { }
