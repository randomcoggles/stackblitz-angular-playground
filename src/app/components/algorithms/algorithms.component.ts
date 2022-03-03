import { Component, OnInit } from '@angular/core';
import { MathUtils } from './math-utils';
@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.css']
})
export class AlgorithmsComponent implements OnInit {

  mathUtils;
  processingNextPrimeFiboWithMemoisation = {} 
  nonMemoisedProcessingNextPrimeFiboWithMemoisation = {}
  calculatingNextPrimeFibo = false;

  constructor() {
    this.mathUtils = MathUtils;
  }

  ngOnInit() {
  }

  processNextPrimeFiboWithMemoisation(){
    this.calculatingNextPrimeFibo = true;

    setTimeout(() => {
      const number = 1500000;
      const start = window.performance.now();
      const nextPrimeFiboValue = MathUtils.nextPrimeFibonacci(number)
      const end = window.performance.now();
      const totalTime = (end - start) + 'ms'
      this.processingNextPrimeFiboWithMemoisation = {
        number,
        totalTime,
        nextPrimeFiboValue,
      }
      this.calculatingNextPrimeFibo = false;
    })

  }

  processNonMemoisedNextPrimeFiboWithMemoisation(){

    this.calculatingNextPrimeFibo = true;
    setTimeout(() => {   ;
      const number = 1500000;
      const start = window.performance.now();
      const nextPrimeFiboValue = MathUtils.nonMemoisedNextPrimeFibonacci(number)
      const end = window.performance.now();
      const totalTime = (end - start) + 'ms'
      this.nonMemoisedProcessingNextPrimeFiboWithMemoisation = {
        number,
        totalTime,
        nextPrimeFiboValue,
      }

      this.calculatingNextPrimeFibo = false;
    });



  }

  


}