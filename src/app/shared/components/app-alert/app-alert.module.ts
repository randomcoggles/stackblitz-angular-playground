import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppAlertComponent } from './app-alert.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
	imports: [
		CommonModule,
		MatDialogModule
	],
	declarations: [AppAlertComponent],
	exports: [AppAlertComponent],
})
export class AppAlertModule {}
