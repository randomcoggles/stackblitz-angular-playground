import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { PaginationComponent } from './pagination.component';

export const routingModule = RouterModule.forChild([
  {
    path: '', component: PaginationComponent
  }
]);


@NgModule({
  imports: [
    CommonModule,
    routingModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  declarations: [PaginationComponent]
})
export class PaginationModule { }
