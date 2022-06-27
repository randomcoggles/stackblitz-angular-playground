import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { PrimeSpiralComponent } from './components/prime-spiral/prime-spiral.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';

import { MiscellaneousComponent } from './miscellaneous.component';
import { NgxGraphModule } from '@swimlane/ngx-graph';

import { NgxGraphTestComponent } from './components/ngx-graph-test/ngx-graph-test.component';


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
				path: 'ngx-graph-test',
				component: NgxGraphTestComponent,
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
			},
			{
				path: 'content-projection',
				loadChildren: () => import('./components/content-projection/content-projection.module').then(m => m.ContentProjectionModule)
			}
		],
	},
];


@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		MatButtonModule,
		NgxGraphModule,
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
    MatListModule
	],
	declarations: [MiscellaneousComponent, PrimeSpiralComponent, NgxGraphTestComponent],
})
export class MiscellaneousModule {}

