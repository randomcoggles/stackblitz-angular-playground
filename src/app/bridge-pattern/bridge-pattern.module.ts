import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetWrapperComponent } from './components/widget-wrapper/widget-wrapper.component';

import { AngularComponentsModule } from '../shared/angular-components/angular-components.module';
import { RouterModule, Routes } from '@angular/router';
import { BridgePatternComponent } from './components/bridge-pattern/bridge-pattern';
import { WeatherWidgetComponent } from './widgets/weather-widget/weather-widget.component';
import { VelocityWidgetComponent } from './widgets/velocity-widget/velocity-widget.component';

const routes: Routes = [
  { path: '', component: BridgePatternComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AngularComponentsModule
  ],
  declarations: [
    BridgePatternComponent,
    WidgetWrapperComponent,
    WeatherWidgetComponent,
    VelocityWidgetComponent
    ]
})
export class BrigdePatternModule { }
