import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularComponentsModule } from '../shared/angular-components/angular-components.module';
import { AppLineChartComponent } from './components/line-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsService } from './services/charts.service';
import { RouterModule, Routes } from '@angular/router';
import { AppChartsComponent } from './charts.component';
import { D3BarChartComponent } from './components/d3-bar-chart/d3-bar-chart.component';

const routes: Routes = [
	{
		path: '',
		component: AppChartsComponent,
		children: [
      { path: 'line-chart', component: AppLineChartComponent },
      { path: 'd3-charts', component: D3BarChartComponent }
      ],
	},
];

@NgModule({
	imports: [CommonModule, AngularComponentsModule, NgxChartsModule, RouterModule.forChild(routes)],
	exports: [RouterModule],
	declarations: [AppChartsComponent, AppLineChartComponent, D3BarChartComponent],
	providers: [ChartsService],
})
export class AppChartsModule {}
