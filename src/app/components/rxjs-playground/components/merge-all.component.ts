import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { timer, combineLatest } from 'rxjs';
@Component({
  selector: 'merge-all',
  template: `
    <p>Merge All</p>
  `
})
export class MergeAllComponent implements OnDestroy {
  subscriptions= []
  
  ngOnDestroy(){
    this.subscriptions.forEach(sub => {
      return sub?.unsubscribe();
    })
  }

 }