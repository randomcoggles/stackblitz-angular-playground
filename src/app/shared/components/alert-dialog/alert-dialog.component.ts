import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'alert-dialog',
	templateUrl: './alert-dialog.component.html',
	styleUrls: ['./alert-dialog.component.scss'],
})
export class AlertDialogComponent {
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
