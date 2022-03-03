import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XSSComponent } from './xss.component';
import { XSSPostsComponent } from './xss-posts.component';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { XSSService } from './xss.service';

const routes: Routes = [
  { path: '', component: XSSComponent },
  { path: 'posts', component: XSSPostsComponent}
  ];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ],
  providers: [XSSService],
  declarations: [ XSSComponent, XSSPostsComponent ]
})
export class XSSModule {}





