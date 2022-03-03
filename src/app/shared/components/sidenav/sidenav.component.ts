import { Component } from '@angular/core';
import { SidenavService } from './sidenav.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sidenav',
  templateUrl: 'sidenav.component.html'
})
export class SidenavComponent {
	mode = new FormControl('side');
	opened: boolean = true;
  constructor(
    //public readonly sidenavService: SidenavService 
    ){

  }
}