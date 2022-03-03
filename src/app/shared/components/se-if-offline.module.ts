import { CommonModule } from '@angular/common';
import { Component, NgModule, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, merge, Observable, of, Subscription } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Component({
	selector: 'se-if-offline',
	template: `
		<ng-content *ngIf="!(online$ | async)"></ng-content>
	`,
})
export class IfOfflineComponent implements OnInit {

	online$ = of(true);

	ngOnInit(): void {
		this.online$ = merge(
       of(!!navigator.onLine),
       fromEvent(window, 'online').pipe(mapTo(true)),
       fromEvent(window, 'offline').pipe(mapTo(false))
    );
	}

}

@NgModule({
	imports: [CommonModule],
	declarations:[IfOfflineComponent],
	exports: [IfOfflineComponent]
})
export class SeIfOfflineModule {}
