import { Component, OnInit } from '@angular/core';

@Component({
	// selector: ''
	template: `
    <p>{{loadingMessage}}</p>
    <div class="flex center" *ngIf="loading">
      <mat-progress-spinner
          color="primary"
          mode="indeterminate"
          value="50">
      </mat-progress-spinner>
    </div>
    
  `,
})
export class PromisePlaygroundComponent implements OnInit {
  loading = false;
  loadingMessage = '';
	private createPromise = (config: { resolve?: boolean; value?: any; resolveTime?: number }) => {
		return new Promise((resolve, reject) => {
			const promiseTime = config.resolveTime || Math.random() * 3000;
			setTimeout(() => {
				if (config.resolve) {
					//console.log('(config.value) ', config.value);
					resolve(config.value);
					return;
				}
				reject(config.value);
			}, promiseTime);
		});
	};
	promisesResults = [];

	ngOnInit() {

    const promisesResults = [];
    this.waitAllPromissSettle();

  }

  waitAllPromissSettle() {
    this.loadingMessage = 'Waiting all promises to settle!'
    var promisesArr = [
        {resolve: true, value: 'resolved promise number 01', resolveTime: 6000},
        //{resolve: true, value: 'resolved promise number 01'},
        {resolve: false, value: 'rejected promise number 01'},
        {resolve: true, value: 'resolved promise number 02'},
        {resolve: true, value: 'resolved promise number 03'},
    ]
    .map(val => this.createPromise(val));

    this.loading = true;
    Promise['allSettled'](promisesArr)
    .then(results => {
      this.loading = false;
      results.forEach((promise) => {
        console.log(promise);
      });
    });

  }

	
}
