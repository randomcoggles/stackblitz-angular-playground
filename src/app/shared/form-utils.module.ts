import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularComponentsModule } from './angular-components/angular-components.module';
import { InputErros } from './components/input-errors/input-errors';

@NgModule({
  imports: [
    CommonModule,
    AngularComponentsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  // declarations: [InputErros],
  exports: [ReactiveFormsModule, FormsModule ]
})
export class FormsUtilModule{ }