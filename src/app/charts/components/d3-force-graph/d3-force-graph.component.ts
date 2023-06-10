import { Component, ElementRef, ViewChild, AfterViewInit } from "@angular/core";
import {
    select,
    forceSimulation,
    forceManyBody,
    forceLink,
    forceCenter,
    drag,
} from 'd3';

import { GraphResult } from "./models";
import { graphData } from './data02';
import { BehaviorSubject } from "rxjs";

@Component({
    selector: 'app-line-chart',
    templateUrl: 'd3-force-graph.component.html',
    styleUrls: ['d3-force-graph.component.scss']
})
export class D3ForceGraphComponent {
    graphData: GraphResult = graphData;
    currentGraphData: GraphResult = graphData;
    @ViewChild('canvas') canvas: ElementRef = {} as any;



    width: number; // = +svg.attr('width');
    height: number; // = +svg.attr('height');
    centerX: number; // = width / 2;
    centerY: number; // = height / 2;
    simulation;
    nodes$ = new BehaviorSubject<any>(null);
    nodes
    nodeSize = 15;
    trackById = (obj) => obj.id;

    ngAfterViewInit() {
        const svg = select(this.canvas.nativeElement || {});
        this.width = +svg.attr('width');
        this.height = +svg.attr('height');
        this.centerX = this.width / 2;
        this.centerY = this.height / 2;

        this.graphData.links = this.graphData.links.map(link => {
            const nodes = this.graphData.nodes;
            link.target = nodes.find(node => ('' + node.id) === ('' + link.target));
            link.source = nodes.find(node => ('' + node.id) === ('' + link.source));
            return link;
        })

        this.simulation = forceSimulation(this.graphData.nodes)
            .force('charge', forceManyBody().strength(-20))
            .force(
                'link',
                forceLink(this.graphData.links).distance((link) => link.distance)
            )
            .force('center', forceCenter(this.centerX, this.centerY));
        this.nodes$.next(this.simulation.nodes());
        console.log('simulation:\t', this.simulation);

        const dragInteraction = drag().on('drag', (event, node) => {
            node.fx = event.x;
            node.fy = event.y;
            this.simulation.alpha(1);
            this.simulation.restart();
        });


        const lines = svg
            .selectAll('line')
            .data(this.graphData.links)
            .enter()
            .append('line')
            .attr('stroke', (link) => link.color || 'black');


        const circles = svg
            .selectAll('circle')
            .data(this.graphData.nodes)
            .enter()
            .append('circle')
            .attr('fill', (node) => node.color || 'gray')
            .attr('r', (node) => this.nodeSize)
            .call(dragInteraction);

        const text = svg
            .selectAll('text')
            .data(this.graphData.nodes)
            .enter()
            .append('text')
            .attr('text-anchor', 'middle')
            .attr('alignment-baseline', 'middle')
            .style('pointer-events', 'none')
            .text((node) => node.id);

        this.simulation.on('tick', () => {
            circles.attr('cx', (node) => node.x).attr('cy', (node) => node.y);
            text.attr('x', (node) => node.x).attr('y', (node) => node.y);

            lines
                .attr('x1', (link) => link.source.x)
                .attr('y1', (link) => link.source.y)
                .attr('x2', (link) => link.target.x)
                .attr('y2', (link) => link.target.y);
        });

    }
}
