import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppValidationsComponent } from './components/forms/validations.component';

import { AppChartsModule } from './charts/charts.module';

import { NgModule } from '@angular/core';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { AlgorithmsComponent } from './components/algorithms/algorithms.component';
import { AppAlertsComponent } from './components/alerts/alerts.component';

export const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'pipes', component: PipesComponent },
	{ path: 'input-validations', component: AppValidationsComponent },
	{
		path: 'not-found',
		component: NotFoundComponent
	},
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{
		path: 'charts',
		loadChildren: './charts/charts.module#AppChartsModule'
	},
	{ path: 'sample', loadChildren:  './sample/sample.module#SampleModule' },
  {path: 'bridge-pattern', loadChildren: './bridge-pattern/bridge-pattern.module#BrigdePatternModule'},
  { path: 'timeline', loadChildren: './timeline/timeline.module#TimelineModule'},
  { path: 'subscriptions', component: SubscriptionsComponent},
  { 
    path: 'ngrx-playground',
    loadChildren: () => import('./ngrx-playground/ngrx-playground.module').then(m => m.NGRXPlaygroundModule)
  },
	{
		path: 'algorithms',
		component: AlgorithmsComponent
	},
  { 
    path: 'chrome-new-features',
    loadChildren: () => import('./chrome-new-features/chrome-new-features.module').then(m => m.ChromeNewFeaturesModule)
  },
	{
		path: 'alerts',
		component: AppAlertsComponent
	},
	{
		path: 'dialogs',
		loadChildren: () => import('./components/dialogs/dialogs.module').then(m => m.DialogsModule)
	},
	{
		path: 'tree-example',
		loadChildren: () => import('./components/tree-example/tree-example.module').then(m => m.TreeExampleModule)
	},
	{
		path: 'tui-calendar',
		loadChildren: () => import('./shared/components/tui-calendar/tui-calendar.module').then(m => m.TUICalendarModule)
	},
	{
		path: 'xss-example',
		loadChildren: () => import('./components/xss/xss.module').then(m => m.XSSModule)
	},
	{
		path: 'xss-example/posts',
		loadChildren: () => import('./components/xss/xss.module').then(m => m.XSSModule)
	},
	{
		path: 'rxjs-playground',
		loadChildren: () => import('./components/rxjs-playground/rxjs-playground.module').then(m => m.RxjsPlayground)
	},
	{
		path: 'pagination',
		loadChildren: () => import('./components/pagination/pagination.module')
		.then(m => m.PaginationModule)
	},
	{
		path: 'miscellaneous',
		loadChildren: () => import('./miscellaneous/miscellaneous.module')
		.then(m => m.MiscellaneousModule)
	},
	{ path: '**', redirectTo: 'not-found', pathMatch: 'full' },
	
];

const routing = RouterModule.forRoot(routes);

@NgModule({
	imports: [routing],
	exports: [RouterModule],
})
export class AppRoutingModule {}

