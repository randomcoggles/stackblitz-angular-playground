import { CommonModule } from "@angular/common";
import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { createAction, createReducer, on, Store, StoreModule } from '@ngrx/store';
import { NGRXPlaygroundComponent } from "./components/ngrx-playground.component";

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
// Counter {{count$ | async}}
@Component({
  selector: 'counter',
  template:`  
  <div>Current Count: {{ count$ | async }}</div>
    <section>
      <button mat-raised-button (click)="increment()">Increment</button>
      <button mat-raised-button (click)="decrement()">Decrement</button>
    </section>
  `
}) 
export class CounterComponent{
  count$;
  
  constructor(private store: Store<{count: number}>) {
    this.count$ = store.select('count');

  }

  increment() {
    this.store.dispatch(increment());
  }
  
  decrement() {
    this.store.dispatch(decrement());
  }
}

const routes: Routes = [{
  path: '',
  component: NGRXPlaygroundComponent,
  children: [
    {
      path: 'counter',
      component: CounterComponent
    }
  ]
}];

const counterReducer = createReducer(
  0,
  on(increment, state => state + 1),
  on(decrement, state => state - 1)
)


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forRoot({count: counterReducer})
  ],
  declarations: [
    NGRXPlaygroundComponent,
    CounterComponent
    ]
})
export class NGRXPlaygroundModule {}