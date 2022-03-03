import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TreeNavigationComponent } from './tree-navigation.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
    CommonModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ],
	declarations: [TreeNavigationComponent],
	exports: [TreeNavigationComponent],
})
export class TreeNavigationModule {}

