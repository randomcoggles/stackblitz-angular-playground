import { Injectable } from "@angular/core";

Injectable({providedIn: 'root'})
export class GlobalService {
  counter = 0;
  increaseCounter() {
    this.counter++;
  }
}