import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SideNavService {
  private mode = new BehaviorSubject<'side' | 'over'>('side'); // TODO: 'side' | 'over', other?
  public mode$ = this.mode.asObservable(); 

  private opened = new BehaviorSubject<boolean>(true);
  public opened$ = this.opened.asObservable(); 

  public toggle() {
    this.opened.next(!this.opened.value);
  }
  
  public close() {
    this.opened.next(false);
  }

}
