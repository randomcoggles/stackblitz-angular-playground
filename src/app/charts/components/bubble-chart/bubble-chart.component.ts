import { Component, ViewChild, AfterViewInit, OnInit } from "@angular/core";
import { bubbleData } from "../../data-2";
import { bubbleData as bubbleData2 } from "../../data";
import { generateColor } from "./utils/color-algorithm";
import { Subject } from "rxjs";
import { ChartsService } from "../../services/charts.service";
import { tap } from "rxjs/operators";
import { BubbleDataResponse } from "./bubble-chart.model";

@Component({
  selector: "app-bubble-chart",
  templateUrl: "./bubble-chart.component.html",
  styleUrls: ["./bubble-chart.component.scss"]
})
export class AppBubbleChartComponent implements AfterViewInit, OnInit {
  @ViewChild("myChart") myChart;
  radius = 7.5;
  bubbleData: any[];
  bubbleData2: any[];
  view: any[] = [793, 541];
  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = false;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = "Values($)";
  showYAxisLabel: boolean = true;
  xAxisLabel: string = "Score";
  maxRadius: number = 55;
  minRadius: number = 1;
  yScaleMin: number = 0;
  yScaleMax: number = 10000;
  showChart = true;
  neighboorRadiusX = 4;
  neighboorRadiusY = 40;

  update$: Subject<any> = new Subject();

  colorScheme = {
    domain: ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"]
  };

  selections = {};
  CPFCount = 0;
  selectedAmmout = 0;
  reserved: any[];
  dimensionSliderLocked = true;

  constructor(private chartService: ChartsService) {
    const chartData1 = JSON.parse(JSON.stringify(bubbleData));

    chartData1[0].series.forEach((item, i) => {
      item.id = i + 1;
      item.r = 2;
    });

    chartData1[0].series = this.joinNeighboors(
      360,
      36,
      chartData1[0].series
    );

    const chartData2 = JSON.parse(JSON.stringify(bubbleData));
    chartData2[0].series.forEach((item, i) => {
      item.id = i + 1;
      item.r = 1;
    });
    

    Object.assign(this, { bubbleData: chartData1 });
    Object.assign(this, { bubbleData2 });
    Object.assign(this, { reserved: chartData2 });
    
    // debugger;
    window["myChart"] = this.myChart;
    window["AppComponent"] = this;
  }

  ngOnInit() {
    this.chartService.getBubbleChartData('data01')
    .pipe(tap(() => {}))
    .subscribe({
      next: (response: BubbleDataResponse) => {
        this.bubbleData = [{name: 'Series 0', series: response.data}];
      },
      error: errorResponse => {

      }
    })
  }

  justRefresh() {
    this.bubbleData = [{name: 'Series 0', series: JSON.parse(JSON.stringify(this.reserved[0].series))}];
    setTimeout(() => {
      this.update$.next(true);
      setTimeout(() => {
        this.setColor();
      }, 100);
    }, 100);
    console.log('this.bubbleData:\t', this.bubbleData);

  }

  radiusChange(radius, val) {
    console.log(radius);
    this.neighboorRadiusY = radius * 40;
    this.neighboorRadiusX = radius * 4;

    let filteredData = this.joinNeighboors(
      this.neighboorRadiusY,
      this.neighboorRadiusX,
      JSON.parse(JSON.stringify(this.reserved[0].series))
    );
    filteredData = this.joinNeighboors(
      this.neighboorRadiusY,
      this.neighboorRadiusX,
      filteredData
    );
    console.log('filteredData:\t', filteredData);

    this.bubbleData = [{name: 'Series 0', series: filteredData}];

    setTimeout(() => {
      this.update$.next(true);
      setTimeout(() => {
        this.setColor();
      }, 100);
    }, 100);
  }
  ngAfterViewInit() {
    setTimeout(this.setColor, 100);
  }


  onSelect(data, event): void {
    // debugger;
    console.log("onSelect event:\t", data, event);
    const selectionId = data.r + "_" + data.y + "_" + data.x;
    if (this.selections[selectionId]) {
      delete this.selections[selectionId];
    } else {
      this.selections[selectionId] = data;
    }

    this.calcSelectedCPFs();
    // console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  private calcSelectedCPFs() {
    const array = Object.entries(this.selections).map(item => item[1]);
    this.CPFCount = array.reduce((a, b) => a + b.r, 0);
    this.selectedAmmout = array.reduce((a, b) => a + b.y, 0);
  }

  public removeSelectedItem(key: string) {
    delete this.selections[key];
    this.calcSelectedCPFs();
  }

  hover(data1, data2) {
    console.log(data1, data2);
  }

  onActivate(data): void {
    // console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    // console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  public setColor() {
    console.time('setColor');
    console.time('tempColor');
    var chartArea = document.querySelectorAll("rect.bubble-chart-area");
    var chartAreaClipRect = chartArea[0].getClientRects()  as any;;
    chartAreaClipRect = chartAreaClipRect[0]
    console.time('tempColor');
    var tmp = generateColor("#1d4f91", "#af1685", chartAreaClipRect.width);
    console.timeEnd('tempColor');
    var that = window["AppComponent"];

    // document.querySelectorAll('g.circle').forEach(g => {
    //   g.addEventListener('select', (event, param2) => {
    //     console.log('O event foi...', event, param2);
    //   });
    //   setTimeout(()=>{
    //     g.dispatchEvent( new Event('click', {data: g}) );
    //     var item = that.selections[that.selections.length - 1];
    //     g.setAttribute('testio', JSON.stringify(item));
    //   }, 0);
    // });

    var circles = document.querySelectorAll("g.circle circle");
    var circleArr = Array.from(circles);

    circleArr.forEach((circle, i) => {
      circle.addEventListener("click", event => {
        const classList = event.target.parentNode.classList;

        if (classList.contains("selected")) {
          classList.toggle("selected");
        }
      });

      var circleRadius = +circle.getAttribute("r");
      circle.style.strokeWidth = Math.max(circleRadius * 0.2, 3);
      circle.setAttributeNS(
        "http://www.w3.org/2000/svg",
        "stroke-width",
        Math.max(circleRadius * 0.3, 3)
      );

      var clipCAre = circle.getClientRects()[0];
      if(clipCAre && chartAreaClipRect) {
        var translatedX = parseInt(clipCAre.x - chartAreaClipRect.x);
        circle.style.fill = tmp[translatedX];
      }

      let cln = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );

      cln.style.fill = "#fff";
      cln.classList.add("selection-helper");
      cln.style.strokeWidth = Math.max(circleRadius * 0.3, 4);
      cln.style.stroke = circle.style.fill;
      cln.style.r = circleRadius * 1.2;
      circle.parentNode.insertBefore(cln, circle);

      // console.log(clipCAre.x, chartAreaClipRect.x, 'translatedX: ', translatedX);
    });

    // var circles = document.querySelectorAll('.ng-tns-c3-2 [ng-reflect-data]');
    // console.log('circles:\t', circles);
    // this.bubbleData[0].series.forEach(item => {
    //   item.color = tmp[item.x];
    //   item.fill = tmp[item.x];
    // })
    // console.log(JSON.stringify(this.bubbleData, null, 3));
    // Array.from(circles).forEach((circle) => {

    //   const colorIndex = +(circle.getAttribute('ng-reflect-data') || 500);
    //   console.log('El data:\t', circle.getAttribute('ng-reflect-data'), tmp[colorIndex] );
    //   const el = circle.querySelectorAll('circle');
    //   el[0].style.fill = tmp[colorIndex]; // 'rgb(129,40,137)';
    // });
    
    console.timeEnd('setColor');
  }

  joinNeighboors(distY, distX, neighboors) {
    //     debugger;
    console.time('joinNeighboors');
    let filteredNeighboors = neighboors;
    filteredNeighboors.forEach(item => {
      filteredNeighboors.forEach((subItem, i) => {
        if (item.id === subItem.id) {
          return true;
        }
        const isNeighboorX = Math.abs(subItem.x - item.x) <= distX;
        const isNeighboorY = Math.abs(subItem.y - item.y) <= distY;
        if (isNeighboorX && isNeighboorY) {
          item.r += subItem.r;
          item.y += (subItem.y - item.y) / 2;
          item.x += (subItem.x - item.x) / 2;
          item.power = item.power || item.r;
          item.power += subItem.r;
          filteredNeighboors.splice(i, 1);
        }
      });
    });
    
    console.log('joinNeighboors:');
    console.timeEnd('joinNeighboors');

    return filteredNeighboors;
  }
}
