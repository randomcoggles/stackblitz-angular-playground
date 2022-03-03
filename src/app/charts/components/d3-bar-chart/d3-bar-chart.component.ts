import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChartsService } from '../../services/charts.service';
import { scaleLinear, scaleBand, max, min, create } from 'd3';
// import {scaleLinear} from "d3-scale";

@Component({
	selector: 'd3-bar-chart',
	templateUrl: 'd3-bar-chart.component.html',
	styleUrls: ['d3-bar-chart.component.scss'],
})
export class D3BarChartComponent implements OnInit, AfterViewInit {

  @ViewChild('chartWrap', { static: false }) chartWrap;
	coronaVirusNewCases = null;
	xScale;
	yScale;
	svgElement;
	chartWidth = 1520;
	chartHeight = 380;

	constructor(private chartsService: ChartsService) {}

	ngOnInit() {
	}

  ngAfterViewInit () {
		console.time('chartdata')
		this.chartsService.getCoronaVirusNewCases().subscribe({
			next: response => {
				
				console.timeEnd('chartdata')
				this.coronaVirusNewCases = response.results;
				this.render(this.coronaVirusNewCases);
			},
		});


  }

	render(data) {
    const yValue = d => d.qtd_confirmado;
    const xValue = d => d.label;
		const minVal = min(data, yValue);
		const maxVal = max(data, yValue);
    const margin = {top: 20, right: 20, bottom: 20, left: 100}
    const innerHeight = this.chartHeight - (margin.top + margin.bottom);
    const innerWidth = this.chartWidth - (margin.left + margin.right);
    

		this.yScale = scaleLinear()
			.domain([minVal, maxVal])
			.range([0, innerHeight]);

		this.xScale = scaleBand()
			.domain(data.map(xValue))
			.range([0, innerWidth]);

		const svg = create('svg').attr('viewBox', [0, 0, this.chartWidth, this.chartHeight]);
    svg.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', d => this.xScale(xValue(d)))
    .attr('transform', d => {
      return `translate(0, ${innerHeight - this.yScale(yValue(d))})`;
      })
    .attr('width', this.xScale.bandwidth())
    .attr('height', d => this.yScale(yValue(d)))
    .attr('stroke', 'cyan')
    .attr('fill', 'green')
    .attr('data-index', (d,i) => i)
    .on('mouseover', function(d,i){
      console.log( i);
    })
		const canvas = this.chartWrap.nativeElement;
		canvas.innerHTML = '';

    canvas.appendChild(svg.node());
		// debugger;
		console.log('...............');
	}
}
