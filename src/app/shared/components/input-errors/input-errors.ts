import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { AbstractControl } from "@angular/forms";

@Component({
  selector: 'input-errors, [input-errors]',
  template: ` 
    <!-- {{control?.errors | json }} -->

      <mat-hint align="start" *ngFor="let error of (errors ||{}) ">
        f - {{error.message}}
      </mat-hint>
    <!--
    <ng-container *ngIf="control?.errors">
      <mat-hint *ngFor="let error of errors">
        f - {{error.message}}
      </mat-hint>
    </ng-container>
    -->
  `,
})
export class InputErros implements OnChanges {
  @Input() control: AbstractControl;
  @Input() showOn: [''];

  get errors() {
    console.log(this.control.errors)
    return this.control.errors &&  Object.values(this.control.errors);
  }
  errorsMap = {
    required: { message: '${fieldName} is required' },
    minlength: { message: '${fieldName} should have minimum ${minLengthValue}' },
    max: {message: ""},
    maxlength: {message: "${fieldName} must be less than 200 characters"},
    min: {message: ""},
    pattern: {message: ""},
    email: { message: '${fieldName} is not a valid value' }

  }

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges) {
      const control: AbstractControl = changes.control &&changes.control.currentValue;

      console.log('control.parent.errors:\t', control.parent.errors);

    if(control && control.invalid){

      control.valueChanges.subscribe(change => {
        Object.entries(control.errors || {}).forEach(([errorName, errorValue]: [any, any]) => {
            const mappedError = this.errorsMap[errorName];
          if(mappedError) {
            control.errors[errorName] = {...control.errors[errorName], ...this.errorsMap[errorName]}            
          }
        });

        console.log(control.errors)
        console.log(this.errors)

      })
      
    }
    
  }
  show = true;
}
