import { Component } from "@angular/core";

@Component({
  selector: 'app-bridge-pattern',
  template: `
  <div class="d-flex">
    <app-widget-wrapper >
      <app-velocity-widget></app-velocity-widget> 
    </app-widget-wrapper>
    <app-widget-wrapper>
      <!-- <app-velocity-widget></app-velocity-widget>  -->
      <app-weather-widget></app-weather-widget>
    </app-widget-wrapper>
  </div>
  `,
  styles: [`
  .d-flex { display: flex;}
  `]
})
export class BridgePatternComponent{}