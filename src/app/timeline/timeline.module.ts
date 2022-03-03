import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FeedItemComponent } from "./components/feed-item/feed-item.component";
import { TimelineComponent } from "./timeline.component";
import { AngularComponentsModule } from '../shared/angular-components/angular-components.module';
const routes: Routes = [
  { path: '', component: TimelineComponent }
]

@NgModule({
  imports: [CommonModule, AngularComponentsModule, RouterModule.forChild(routes)],
  declarations: [TimelineComponent, FeedItemComponent]
})
export class TimelineModule {}