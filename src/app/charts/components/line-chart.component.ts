import { Component } from '@angular/core';

@Component({
	selector: 'app-line-chart',
	template: `
		<mat-card class="example-card mat-elevation-z8">
			<mat-card-header>
				<div mat-card-avatar class="example-header-image"></div>
				<mat-card-title><h3>Sales by month</h3></mat-card-title>
				<mat-card-subtitle>Last 13 months of sales - in thousands</mat-card-subtitle>
			</mat-card-header>
			<mat-card-content class="flex-col">
				<ngx-charts-line-chart
					[view]="view"
					[showXAxisLabel]="showXAxisLabel"
					[showYAxisLabel]="showYAxisLabel"
					[xAxis]="xAxis"
					[yAxis]="yAxis"
					[xAxisLabel]="xAxisLabel"
					[yAxisLabel]="yAxisLabel"
					[timeline]="timeline"
					[results]="results"
				>
				</ngx-charts-line-chart>
			</mat-card-content>
			<mat-card-actions>
				<button mat-button>LIKE</button>
				<button mat-button>SHARE</button>
			</mat-card-actions>
		</mat-card>
	`,
  styles: [`
    .flex-col{
      display: flex;
    }
  `]
})
export class AppLineChartComponent {
	legend: boolean = true;
	showLabels: boolean = true;
	animations: boolean = true;
	xAxis: boolean = true;
	yAxis: boolean = true;
	showYAxisLabel: boolean = true;
	showXAxisLabel: boolean = true;
	xAxisLabel: string = 'Year/month';
	yAxisLabel: string = 'Sales';
	timeline: boolean = true;

	view = [720, 540];

	results = [
		{
			name: 'Last year sales',
			series: [
				{
					name: 'Jan/2019',
					value: 600,
					clients: 27,
				},
				{
					name: 'fev',
					value: 600,
					clients: 27,
				},
				{
					name: 'mar',
					value: 610,
					clients: 27,
				},
				{
					name: 'abr',
					value: 550,
					clients: 27,
				},
				{
					name: 'mai',
					value: 500,
					clients: 27,
				},
				{
					name: 'jun',
					value: 600,
					clients: 27,
				},
				{
					name: 'jul',
					value: 650,
					clients: 27,
				},
				{
					name: 'aug',
					value: 600,
					clients: 27,
				},
				{
					name: 'sep',
					value: 620,
					clients: 27,
				},
				{
					name: 'oct',
					value: 640,
					clients: 27,
				},
				{
					name: 'nov',
					value: 700,
					clients: 27,
				},
				{
					name: 'dec',
					value: 950,
					clients: 27,
				},
				{
					name: 'jan/2020',
					value: 1200,
					clients: 27,
				},
			],
		},
	];
}
