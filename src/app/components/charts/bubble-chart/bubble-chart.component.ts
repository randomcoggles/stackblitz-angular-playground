import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color } from 'ng2-charts';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  // styleUrls: ['./bubble-chart.component.scss']
})
export class BubbleChartComponent implements OnInit {
  public bubbleChartOptions: ChartOptions = {
    events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
      hover: {
         mode: 'nearest',
         intersect: true
      },
    responsive: true,
    scales: {
      xAxes: [
        {
          ticks: {
            min: 0,
            max: 30,
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 30,
          }
        }
      ]
    }
  };
  public bubbleChartType: ChartType = 'bubble';
  public bubbleChartLegend = true;

  public bubbleChartData: ChartDataSets[] = [
    {
      data: [
        { x: 10, y: 10, r: 10 },
        { x: 15, y: 5, r: 15 },
        { x: 26, y: 12, r: 23 },
        { x: 7, y: 8, r: 8 },
      ],
      pointHoverRadius: 5,      
      label: 'Series A',
      backgroundColor: 'green',
      borderColor: 'blue',
      hoverBackgroundColor: 'purple',
      hoverBorderColor: 'red',
    },
  ];

  public bubbleChartColors: Color[] = [
    {
      backgroundColor: [
        'red',
        'green',
        'blue',
        'purple',
        'yellow',
        'brown',
        'magenta',
        'cyan',
        'orange',
        'pink'
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onDragOver(event) {
    console.log('Drag over')
      // do something
      event.preventDefault();
  }
  onDragLeave(event) {
    console.log('Drag Leave')
      // do something
      event.preventDefault();
  }


  // ==============================
  mousedown($event){
    console.log('$event', $event);
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log('Clicked:\t',event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
  public chartDragged(
    { event, active }: { event: MouseEvent, active: {}[] }
): void {
    console.log('Dragged', event, active);
  }

  private rand(max: number) {
    return Math.trunc(Math.random() * max);
  }

  private randomPoint(maxCoordinate: number) {
    const x = this.rand(maxCoordinate);
    const y = this.rand(maxCoordinate);
    const r = this.rand(30) + 5;
    return { x, y, r };
  }

  public randomize(): void {
    const numberOfPoints = this.rand(5) + 5;
    const data = Array.apply(null, { length: numberOfPoints }).map(r => this.randomPoint(30));
    this.bubbleChartData[0].data = data;
  }
}