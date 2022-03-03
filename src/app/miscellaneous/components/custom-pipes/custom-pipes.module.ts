import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CustomPipesComponent } from './custom-pipes.component';
import { CustomDatePipe } from './pipes/custom-date.pipe';

const routes: Routes = [{
path: '',
component: CustomPipesComponent
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CustomPipesComponent,
    CustomDatePipe
  ],
  providers: [CustomDatePipe]
})
export class CustomPipesModule {}

