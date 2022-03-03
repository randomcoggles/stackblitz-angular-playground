import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// import { AppAlertComponent } from '../../shared/components/alert-dialog/alert-dialog.component';

@Component({
	selector: 'alert-dialog',
	template: `<h1>Alert Dialog</h1>`
})
export class AlertDialogComponent {}


@Component({
	selector: 'app-dialogs',
	templateUrl: './dialogs.component.html',
	styleUrls: ['./dialogs.component.scss'],
})
export class DialogsComponent {
	@ViewChild('content') content: ElementRef;
	@Input() config = {
		context: 'primary',
		title: 'Title',
		content: 'The content goes here!',
	};

	@Output() close = new EventEmitter();

	constructor(private host: ElementRef<HTMLElement>, private dialog: MatDialog) {}

	onClose() {
		this.host.nativeElement.remove();
		this.close.emit();
	}

	openDialog() {
		this.dialog.open(AlertDialogComponent, {});
		// alert('Hello Dialogs!'); this.content.nativeElement
	}
}
