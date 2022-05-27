import { Component, Input, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { ThreeDCarrousselManager } from "../../three-d-carroussel.service";

@Component({
  selector: 'app-carroussel-ccontroller',
  templateUrl: './carroussel-controller.component.html',
  styleUrls: ['./carroussel-controller.component.scss']
})
export class CarrousselControllerComponent implements AfterViewInit {

  @ViewChild('perspectiveArea') perspectiveArea: ElementRef;
  @Input() depth = 180;
  @Input() speed = "8s";
  @Input() public perspectiveOrigin = "";
  event: any;
  ballPoint: {x: number, y: number};

  constructor(public tcManager: ThreeDCarrousselManager) {  }

  ngAfterViewInit() {

  }

  perspectiveAreaMousemove(event) {
    const point = {x: event.offsetX, y: event.offsetY };
    this.event = event;
    if(event.which === 1) {
      this.ballPoint = {x: point.x, y: point.y}
      const fatorY = Math.round(200/100);
      const fatorX = Math.round(200/150);      
      const x = point.x - 50;
      const y = point.y - 50;
      this.tcManager.perspectiveOrigin = (x * 1) + '% ' + ( y * 2.5) + '%';
    }
  }

  perspectiveAreaMouseWheel(event) {
    if(event.type === 'wheel') {
      let currentVal = parseInt(this.tcManager.perspective, 10);
      if(event.deltaY > 0) {
        currentVal += 60;
      } else {
        currentVal -= 60;
      }
      this.tcManager.perspective = currentVal + 'px';
      console.log('event:\t', this.tcManager.perspective);
    }
    event.preventDefault();
    return false;
  }

  get ballPointTransform() {
    return `scale(${800 / parseInt(this.tcManager.perspective) })`;
  }

}