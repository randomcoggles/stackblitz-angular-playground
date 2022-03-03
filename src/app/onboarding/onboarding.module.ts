import { NgModule } from "@angular/core";
import { RegisterComponent } from "./register/register.component";
import { AngularComponentsModule } from "../shared/angular-components/angular-components.module";
import { FormsModule } from "@angular/forms";
import { FormsUtilModule } from "../shared/form-utils.module";
import { RouterModule } from "@angular/router";
import { CpfDirective } from "../shared/directives/cpf.directive";
import { InputErros } from "../shared/components/input-errors/input-errors";
import { AppAlertModule } from "../shared/components/app-alert/app-alert.module";
import { SeIfOfflineModule } from '../shared/components/se-if-offline.module';

import { TypeAheadModule } from '../components/forms/type-ahead/type-ahead.module';

export const routing = RouterModule.forRoot([
  {
    path: 'register', component: RegisterComponent
  }
]);
console.log('TypeAheadModule: ', TypeAheadModule)

@NgModule({
  imports: [
    TypeAheadModule,
    AppAlertModule,
    AngularComponentsModule,
    FormsUtilModule,
    routing,
    SeIfOfflineModule,    
  ],
  declarations: [
    RegisterComponent,
    InputErros,
  ],
  providers: [CpfDirective]
})
export class OnboardingModule{}

