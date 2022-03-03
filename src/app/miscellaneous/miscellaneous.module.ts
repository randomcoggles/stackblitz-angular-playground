import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { PrimeSpiralComponent } from './components/prime-spiral/prime-spiral.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, NG_VALIDATORS, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';

import { MiscellaneousComponent } from './miscellaneous.component'

const routes: Route[] = [
	{
		path: '',
		component: MiscellaneousComponent,
		children: [
			{
				path: '',
				component: PrimeSpiralComponent,
			},
			{
				path: 'prime-spiral',
				component: PrimeSpiralComponent,
			},
			{
				path: 'custom-pipes',
				loadChildren: () =>
					import('./components/custom-pipes/custom-pipes.module').then((m) => m.CustomPipesModule),
			},
			{
				path: 'angular-common-issues',
				loadChildren: () => import('./components/angular-common-issues/angular-common-issues.module').then(m => m.AngularCommonIssuesModule)
			}
		],
	},
];


@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		MatButtonModule,
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
    MatListModule
	],
	declarations: [MiscellaneousComponent, PrimeSpiralComponent],
})
export class MiscellaneousModule {}

