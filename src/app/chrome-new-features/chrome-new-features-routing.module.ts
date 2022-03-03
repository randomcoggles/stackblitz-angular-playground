import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChromeNewFeaturesComponent } from './chrome-new-features.component';
import { IntlFeaturesComponent } from './components/intl-features/intl-features.component';
import { PromisePlaygroundComponent } from './components/promises-playground.component';

const routes: Routes = [
	{
		path: '',
		component: ChromeNewFeaturesComponent,
		children: [
			{
				path: '',
        redirectTo: 'intl',
        pathMatch: 'full'
			},
			{
				path: 'intl',
				component: IntlFeaturesComponent,
			},
			{
				path: 'promises-playground',
				component: PromisePlaygroundComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
})
export class ChromeNewFeaturesRoutingModule {}
