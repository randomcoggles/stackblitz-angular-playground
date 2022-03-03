import { Component } from "@angular/core";
import { GlobalService } from "../global.service";
import { SampleService } from "./sample.service";

@Component({
  selector: 'app-sample',
  template: `
  <h3 >Counter: {{sampleService.counter}}</h3>
<p><button mat-raised-button color="primary" (click)="sampleService.increaseCounter()" >Increase Counter</button></p>
<p><button mat-raised-button color="primary" (click)="globalService.increaseCounter()" >Increase Global Counter</button></p>
<p>
SampleService is provided in <strong style="font-size: 20px;text-decoration: underline">component providers</strong>
</p>
<hr>
  <p><app-child></app-child></p> 
  `,
  providers: [SampleService]
})
export class SampleComponent{
  constructor(public sampleService: SampleService, public globalService: GlobalService) {

  }
}