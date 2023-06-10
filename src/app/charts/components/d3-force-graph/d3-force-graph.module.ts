import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { D3ForceGraphComponent } from "./d3-force-graph.component";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            component: D3ForceGraphComponent,

            path: ''
        }])
    ],
    declarations: [D3ForceGraphComponent]
})
export class D3ForceGraphModule {}