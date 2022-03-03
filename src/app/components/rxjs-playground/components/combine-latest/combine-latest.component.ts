import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { timer, combineLatest } from 'rxjs';
@Component({
  selector: 'combine-latest',
  templateUrl: './combine-latest.component.html'
})
export class CombineLatestComponent implements AfterViewInit, OnDestroy {
  intialMsg = 'Waiting the lastest observable to emit...';
  emitedValue = '';
  subscriptions = [];

  ngAfterViewInit() {
    const timerA$ = timer(0,4000);
    const tempSubscription1 = timerA$.subscribe({
      next: (val) => {
        //console.log(' ->>' + val)
        this.intialMsg = 'Waiting the lastest observable to emit... ' + val;
      }
    })
    const timerB$ = timer(2000,4000);
    const timerC$ = timer(4000,4000);

    const tempSubscription2 = combineLatest(timerA$, timerB$, timerC$, (a, b, c) => {
      this.emitedValue = `A: ${a}, B: ${c}, C: ${c}.`;
      return this.emitedValue;
    })
    .subscribe(
      //console.log
      );
    this.subscriptions.push(tempSubscription1, tempSubscription2)

  }
  
  ngOnDestroy(){
    this.subscriptions.forEach(sub => {
      return sub?.unsubscribe();
    })
  }

 }