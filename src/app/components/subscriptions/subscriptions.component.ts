import { Component, OnInit } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {
  subscription01: Subscription;
  countSubscriptions = 0;

  constructor() { }

  ngOnInit() {

  }

  createSubscription() {

    this.countSubscriptions++;
    this.subscription01 = of({testio: '01'})
    .pipe(switchMap(resp =>{
      return of({tesio: '02'})
    }))
    .subscribe(resp => console.log('There you go: ', resp))
    console.log('this.subsCription01: ', this.subscription01);
  }

  
  unsubscribe(){
    
    this.countSubscriptions--;
    this.countSubscriptions = Math.max(this.countSubscriptions, 0);
    console.log('Unsubscribing: ', this.subscription01);
    this.subscription01.unsubscribe();
    console.log('Unsubscribing 2: ', this.subscription01);
  }


}