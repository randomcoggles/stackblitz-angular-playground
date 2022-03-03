import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-alert',
	templateUrl: './app-alert.component.html',
	styleUrls: ['./app-alert.component.scss'],
})
export class AppAlertComponent {
	@Input() config = {
		context: 'primary',
		title: 'Title',
		content: 'The content goes here!',
	};

	@Output() close = new EventEmitter();

  constructor(private host: ElementRef<HTMLElement>){}

	onClose() {
    this.host.nativeElement.remove();
		this.close.emit();
	}
}
