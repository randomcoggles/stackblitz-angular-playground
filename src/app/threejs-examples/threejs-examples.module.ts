import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ThreejsExamplesComponent } from "./threejs-examples.component";


const routes: Routes = [
	{ path: '', component: ThreejsExamplesComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [ThreejsExamplesComponent]
})
export class ThreejsExamplesModule { }