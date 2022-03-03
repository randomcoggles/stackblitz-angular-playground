import { Component } from '@angular/core';

@Component({
	selector: 'app-miscellaneous',
	template: `
<div class="page-container">
  <mat-list class="side-nav-wrap" >
    <mat-list-item class="nav-item mat-elevation-z2" routerLink="prime-spiral"> Prime Spiral </mat-list-item>
    <mat-list-item class="nav-item mat-elevation-z2"  routerLink="custom-pipes"> 
       Custom Pipes
    </mat-list-item>
    <mat-list-item mat-raised-button class="nav-item mat-elevation-z2"  routerLink="angular-common-issues"> 
      Angular Common Issues
    </mat-list-item>
		
  </mat-list>
  <div>
    <router-outlet> </router-outlet> 
  </div>
</div>
  `,
  styles: [`
  .page-container{ display: flex; gap: 1em;}
  .side-nav-wrap{
    min-width: 180px;
    padding: 0;
    border: solid 1px;

  }
  .link-item{ padding:.25em 0}
  .nav-item {
    cursor: pointer;

  }

  `]
})

export class MiscellaneousComponent {}