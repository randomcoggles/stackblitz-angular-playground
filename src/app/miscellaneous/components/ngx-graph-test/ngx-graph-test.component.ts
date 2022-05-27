import { Component, OnInit } from '@angular/core';
import { curveLinear } from 'd3-shape';

@Component({
	selector: 'app-ngx-graph-test',
	templateUrl: './ngx-graph-test.component.html',
	styleUrls: ['./ngx-graph-test.component.scss'],
})
export class NgxGraphTestComponent implements OnInit {
  links = [
    {
      id: 'a',
      source: 'first',
      target: 'c1',
      label: 'uses artifact'
    }, {
      id: 'b',
      source: 'second',
      target: 'c1',
      label: 'uses artifact'
    },  {
      id: 'e',
      source: 'c1',
      target: 'c2',
      label: 'Produces a'
    }
  ]
	nodes = [
		{
			id: 'first',
			label: 'Services Revenue',
			type: 'dataset',
		},
		{
			id: 'second',
			label: 'Sevices business',
			type: 'dataset',
		},
		{
			id: 'c1',
			label: 'BookingsBy...',
			type: 'sqlArtifact',
		},
		{
			id: 'c2',
			label: 'Resource B',
			type: 'dataset',
		}
	];
  curve = curveLinear;

printNode(node){
  console.log('node: ', node);
}
	constructor() {}

	ngOnInit() {}
}
