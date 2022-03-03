import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
	selector: 'app-type-ahead',
	templateUrl: './type-ahead.component.html',
	styleUrls: ['./type-ahead.component.scss']
})
export class TypeAheadComponent 
//implements ControlValueAccesssor 
{
	@Input() value: string = '';
}
