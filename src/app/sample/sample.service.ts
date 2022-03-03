import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class SampleService {

  date: Date;
  counter = 0;

  constructor() {
    this.date = new Date();
   }

   increaseCounter() {
     this.counter++;
   }

}