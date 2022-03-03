import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';
import { RouterModule } from '@angular/router';
import { AngularComponentsModule } from '../shared/angular-components/angular-components.module';
// import { SampleService } from './sample.service';
import { ChildComponent } from './child/child.component';

@NgModule({
	imports: [
    CommonModule,
    AngularComponentsModule,
		RouterModule.forChild([
			{
				path: '',
				component: SampleComponent,
			},
		]),
	],
	exports: [RouterModule],
	declarations: [SampleComponent, ChildComponent],
	// providers: [SampleService],
})
export class SampleModule {}

