import { Directive, HostListener, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { fromEvent, merge, of, Subscription } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Directive({ selector: '[seIfOffline]' })
export class IfOfflineDirective {
	online: boolean;
	sub: Subscription;
  viewCreated = false;

	@Input() set seIfOffline(val: any) {
		if (!window.navigator.onLine) {
			this.viewContainerRef.createEmbeddedView(this.templateRef);
        this.viewCreated = true;
		}
	}

	constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {
		this.sub = merge(
			of(navigator.onLine),
			fromEvent(window, 'online').pipe(mapTo(true)),
			fromEvent(window, 'offline').pipe(mapTo(false))
		).subscribe(online => {
			console.log('online: ', online);

			if (!online && this.templateRef && !this.viewCreated) {
        console.log('sdfsdfsdf')
				this.viewContainerRef.createEmbeddedView(this.templateRef);
        this.viewCreated = true;
				return;
			}
      this.viewCreated = false;
			this.viewContainerRef.clear();
		});
	}

	/*
	@HostListener('window:offline') setOffline() {
		console.log('#1 ------------>>>>>>>');
		this.online = false;
		this.viewContainerRef.clear();
	}

	@HostListener('window:online') setOnline() {
		console.log('#2 ------------>>>>>>>');
		this.online = true;
		if (this.templateRef) {
			this.viewContainerRef.createEmbeddedView(this.templateRef);
		}
	}*/
}
