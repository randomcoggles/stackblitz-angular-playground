import { NgModule } from  '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeAheadComponent } from './type-ahead.component';
import { FormsModule } from '@angular/forms';

console.log('TypeAheadComponent: ', TypeAheadComponent);


@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [TypeAheadComponent],
  exports: [TypeAheadComponent]
})
export class TypeAheadModule{}
