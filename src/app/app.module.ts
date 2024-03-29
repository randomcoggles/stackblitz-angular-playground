import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NG_VALIDATORS, ReactiveFormsModule } from '@angular/forms';
import { AngularComponentsModule } from './shared/angular-components/angular-components.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppUISubscriptionComponent } from './core/ui/app-ui-subscription';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { FloorPipe } from './shared/floor.pipe';
import { PipesComponent } from './components/pipes/pipes.component';
import { UserService } from './core/user.service';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import localePtExtra from '@angular/common/locales/extra/pt';
import localeEnExtra from '@angular/common/locales/extra/en-001';
import { OnboardingModule } from './onboarding/onboarding.module';
import { MockInterceptor } from './core/mock.interceptor';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppValidationsComponent } from './components/forms/validations.component';
import { AppRoutingModule } from './app.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { CpfDirective } from './shared/directives/cpf.directive';
import { IfOfflineDirective } from './shared/directives/if-offline.directive';
import { AlgorithmsComponent } from './components/algorithms/algorithms.component';
import { AppAlertModule } from './shared/components/app-alert/app-alert.module';
import { AppAlertsComponent } from './components/alerts/alerts.component';
import { SeIfOfflineModule } from './shared/components/se-if-offline.module';
import { SidenavModule } from './shared/components/sidenav/sidenav.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ThreeDCarrousselModule } from './components/simple-three-d-carroussel/three-d-carroussel.module';


registerLocaleData(localePt, localePtExtra, localeEnExtra);

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    ThreeDCarrousselModule,
    FormsModule,
    ReactiveFormsModule,
    AngularComponentsModule,
    OnboardingModule,
    AppRoutingModule,
    AppAlertModule,
    SeIfOfflineModule,
    SidenavModule,
    TranslateModule
      .forRoot({
        defaultLanguage: 'es', //Intl.DateTimeFormat().resolvedOptions().locale.split('-')[0] || 'en',
        loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
        }
      })
  ],
  declarations: [
    AppComponent,
    AppUISubscriptionComponent,
    HomeComponent,
    FloorPipe,
    PipesComponent,
    AppValidationsComponent,
    NotFoundComponent,
    SubscriptionsComponent,
    CpfDirective,
    IfOfflineDirective,
    AlgorithmsComponent,
    NotFoundComponent,
    AppAlertsComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    UserService,
    // AppHttpSubscription,
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true },
    { provide: NG_VALIDATORS, useExisting: CpfDirective, multi: true }
  ]
})
export class AppModule { }
