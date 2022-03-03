import { Component, Input, Output, OnDestroy, EventEmitter, ElementRef } from '@angular/core';
import { HttpCallInfo } from './http-call-info';


@Component({
  selector: 'appUiSubscription',
  templateUrl: './app-ui-subscription.html',
  styleUrls: ['./app-ui-subscription.scss']
})
export class AppUISubscriptionComponent implements OnDestroy {

  // TODO: It may need only http info object.
   @Input() httpCallInfo: HttpCallInfo;
   @Output() retry: EventEmitter<any>  = new EventEmitter();
   fadeOut = false;

  constructor(private host: ElementRef<HTMLElement>){

  }

   destroyThis(){
     this.fadeOut = true;
     setTimeout(() => {
     this.fadeOut = false;
      this.httpCallInfo = null;
      // this.host.nativeElement.remove();
     }, 500);
   }

   ngOnDestroy (){
   }

   onRetry() {
     if(this.retry) { this.retry.emit(this.httpCallInfo); }
   }


}