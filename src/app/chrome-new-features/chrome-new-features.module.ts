import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { RouterModule } from '@angular/router';
import { ChromeNewFeaturesRoutingModule } from './chrome-new-features-routing.module';
import { ChromeNewFeaturesComponent } from './chrome-new-features.component';
import { IntlFeaturesComponent } from './components/intl-features/intl-features.component';
import { PromisePlaygroundComponent } from './components/promises-playground.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		ChromeNewFeaturesRoutingModule,
		MatButtonModule,
		MatRadioModule,
		MatProgressSpinnerModule,
	],
	declarations: [
    ChromeNewFeaturesComponent,
    IntlFeaturesComponent,
    PromisePlaygroundComponent
  ],
})
export class ChromeNewFeaturesModule {}
