import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHttpSubscription]',
})
export class HttpSubscriptionDirective {
   @Input() appHttpSubscription: string;
  constructor(elementRef: ElementRef) {
    elementRef.nativeElement.style.backgroundColor = '#f44336';  
    elementRef.nativeElement.style.color = '#fff';
  }
  
}