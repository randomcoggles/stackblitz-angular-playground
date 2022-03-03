import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { RxjsPlaygroundComponent } from './rxjs-playground.component';
import { CombineLatestComponent } from './components/combine-latest/combine-latest.component';


const routes: Routes = [
  {
    path: '',
    component: RxjsPlaygroundComponent,
    // children: [
    //   {
    //     path: '',
    //     redirectTo: 'combine-latest',
    //     pathMatch: 'full'
    //   },
        
    //   {
    //     path: 'combine-latest',
    //     component: CombineLatestComponent
    //   }
    // ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    RxjsPlaygroundComponent,
    CombineLatestComponent
  ]
})
export class RxjsPlayground{}

