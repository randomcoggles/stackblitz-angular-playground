import { NgModule,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCalendarComponent } from './components/calendar.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxTuiCalendarModule } from 'ngx-tui-calendar';

const routes: Routes = [
  {
    path: '',
    component: AppCalendarComponent
  }
]


@NgModule({
  imports: [CommonModule, NgxTuiCalendarModule.forRoot(), RouterModule.forChild(routes)],
  declarations: [AppCalendarComponent]

})
export class TUICalendarModule {}