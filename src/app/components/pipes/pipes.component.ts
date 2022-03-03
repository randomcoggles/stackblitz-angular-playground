import { Component, OnInit } from '@angular/core';
import { timeInterval } from 'rxjs/operators';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  now = new Date();

  constructor() {
    setInterval(() => {
      this.now = new Date();
    }, 1000);
   }

  ngOnInit() {
  }

}