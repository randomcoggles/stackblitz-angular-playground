import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ThreejsExamplesComponent } from "./threejs-examples.component";
import { FoldersExampleComponent } from "./folders-example.component";


const routes: Routes = [
    { path: '', component: FoldersExampleComponent },
    {
        path: 'folders-example', component: FoldersExampleComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [ThreejsExamplesComponent]
})
export class ThreejsExamplesModule { }
