import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatOptionModule } from '@angular/material/core';

import { MatSelectModule } from "@angular/material/select";

const modules = [
	CommonModule,
	MatButtonModule,
	MatSidenavModule,
	MatListModule,
	MatToolbarModule,
	MatIconModule,
	MatToolbarModule,
	MatInputModule,
	MatCheckboxModule,
	MatFormFieldModule,
	MatProgressSpinnerModule,
	MatRadioModule,
	MatCardModule,
	MatProgressBarModule,
	MatCardModule,
	MatOptionModule,
	MatSelectModule
];

@NgModule({
	imports: [...modules],
	exports: [...modules],
	declarations: [],
})
export class AngularComponentsModule { }
