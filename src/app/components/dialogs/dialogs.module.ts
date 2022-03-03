import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogsComponent, AlertDialogComponent } from './dialogs.component';
import { MatButtonModule } from '@angular/material/button';
import { AlertDialogModule } from '../../shared/components/alert-dialog/alert-dialog.module';

import { MatDialogModule } from '@angular/material/dialog';

const routes: Routes = [
  {
    path: '',
    component: DialogsComponent 
  }
];

@NgModule({
  imports:  [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    AlertDialogModule,
    MatDialogModule
  ],
  declarations: [
    DialogsComponent,
    //AlertDialogComponent
  ]
})
export class DialogsModule {}