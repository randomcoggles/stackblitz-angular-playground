import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { TreeExampleComponent } from './tree-example.component';
import { TreeNavigationModule } from '../../shared/components/tree-navigation/tree-navigation.module';

const routes: Routes = [{ path: '', component: TreeExampleComponent }];

@NgModule({
	imports: [
    CommonModule, 
    MatTreeModule, 
    MatIconModule,
    MatButtonModule,
    TreeNavigationModule,
    RouterModule.forChild(routes),
    ],
	declarations: [TreeExampleComponent],
})
export class TreeExampleModule {}

