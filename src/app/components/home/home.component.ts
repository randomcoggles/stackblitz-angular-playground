import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  stars = [1,2,3,4,5];
  
  carrousselData = [
	{
		title: 'Bubble chart',
		icon: 'bubble_chart',
		iconUrl: '',
		catchyWords: ['Innovative'],
    bfbgColor: '#3e2723' // '#0097a7'
	},
	{
		title: 'Line chart',
		icon: 'show_chart',
		iconUrl: '',
		catchyWords: ['Creative'],
    bfbgColor: '#3e2723' // '#ff6f00'
	},
	{
		title: 'Pie chart',
		icon: 'pie_chart',
		iconUrl: '',
		catchyWords: ['Trendy'],
    bfbgColor: '#3e2723'
    
	},
	{
		title: 'Bar chart',
		icon: 'bar_chart',
		iconUrl: '',
		catchyWords: ['Insightfull'],
    bfbgColor: '#3e2723' //'#7b1fa2'    
	},
	{
		title: 'Multiline chart',
		icon: 'multiline_chart',
		iconUrl: '',
		catchyWords: ['Data driven'],
    bfbgColor:  '#3e2723' // '#1b5e20' 
	},
]

}