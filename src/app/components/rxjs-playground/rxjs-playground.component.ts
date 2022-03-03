import { Component } from '@angular/core';
import { of, delay, tap, merge, interval, take, map, last, combineLatest, concat, finalize } from 'rxjs';
// import { of } from 'rxjs/operator';

@Component({
	selector: 'app-rxjs-playground',
	templateUrl: './rxjs-playground.component.html',
})
export class RxjsPlaygroundComponent {

	ngOnInit() {
	}

	combineLatestMsgs: {
		posts?: string;
		categories?: string;
	} = {};

	combineLatest() {
		const posts = [
			{
				id: 1,
				title: 'Post 01',
				description: 'Post description',
				categoryId: 1,
			},
			{
				id: 2,
				title: 'Post 02',
				description: 'Post description',
				categoryId: 1,
			},
			{
				id: 3,
				title: 'Post 03',
				description: 'Post description',
				categoryId: 2,
			},
		];

		of(posts).pipe(
			delay(1000),
			tap((result) => {
				this.combineLatestMsgs.posts = '';
				return result;
			})
		);
		const categories = [
			{
				id: 1,
				title: 'Category 01',
			},
			{
				id: 2,
				title: 'Category 02',
			},
		];

		// of(categories).pipe(
		// 	//delay(3000),
		// 	tap((result) => {
		// 		this.combineLatestMsgs.categories = '';
		// 		//return result;
		// 	})
		// );

	}

	merge() {
		console.log('\n\n<< Merge concurrently emits all values from every given input Observable >>');
    const source1$ = interval( 500).pipe(take(6), map(val => val+ ' #1'));
    const source2$ = interval(1000).pipe(take(3), map(val => val+ ' #2'));
		merge(source1$, source2$)
    .pipe(finalize(() =>{
      console.log('<< End Merge >>')
    }))
    .subscribe(console.log);
	}

  concat(){
    console.log('\n\n Concat sequentially emits all values from the first given Observable and then moves on to the next')
    const source1$ = of(
      'source #1, item 1',
      'source #1, item 2',
      'source #1, item 3',
      );
    const source2$ = of(      
      'source #2, item 1',     
      'source #2, item 2',
    );
    concat(source1$, source2$)
    .subscribe(console.log)
  }

  debouncetime(){

  }

}
