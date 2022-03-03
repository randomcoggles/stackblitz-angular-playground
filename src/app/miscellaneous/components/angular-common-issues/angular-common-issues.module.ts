import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularCommonIssuesComponent } from './angular-common-issues.component';
import { RouterModule, Route } from '@angular/router';

const routes: Route = [
  {
    path: '',
    component: AngularCommonIssuesComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AngularCommonIssuesComponent]
})
export class AngularCommonIssuesModule{}







