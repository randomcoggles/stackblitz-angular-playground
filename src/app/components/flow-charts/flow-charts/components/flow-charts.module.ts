import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatOptionModule } from "@angular/material/core";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { RouterModule, Routes } from "@angular/router";
import { NgxGraphModule } from "@swimlane/ngx-graph";
import { AngularComponentsModule } from "../../../../shared/angular-components/angular-components.module";
import { FlowChartsComponent } from "./flow-charts.component";
import { NewFlowChartNodeComponent } from "./new-node/new-node.component";

const routes: Routes = [
    {
        path: '',
        component: FlowChartsComponent
    }
]

@NgModule({
    imports: [
    CommonModule, 
    RouterModule.forChild(routes), 
    FormsModule, 
    ReactiveFormsModule, 
    NgxGraphModule,
    MatInputModule,        
	MatButtonModule,
	MatSidenavModule,
	MatIconModule,
	MatCheckboxModule,
    MatOptionModule,
    MatSelectModule,
    AngularComponentsModule

    // MatListModule,
    // MatToolbarModule,
    // MatToolbarModule,
    // MatFormFieldModule,
    // MatProgressSpinnerModule,
    // MatRadioModule,
    // MatCardModule,
    // MatProgressBarModule,
    // MatCardModule
    ],
    declarations: [FlowChartsComponent, NewFlowChartNodeComponent, NewFlowChartNodeComponent]
})
export class FlowChartsModule { }