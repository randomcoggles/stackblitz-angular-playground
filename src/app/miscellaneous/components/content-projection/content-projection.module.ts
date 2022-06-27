import { Component, ContentChild, NgModule, OnInit, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// https://angular.io/guide/content-projection#conditional

@Component({
	selector: 'basic-projection-component',
	template: ` <h2>Basic projection:</h2>
		<ng-content></ng-content>`,
})
class BasicContentProjectionComponent {}

@Component({
	selector: 'multi-slot-projection-component',
	styles: [
		`
			.flex {
				display: flex;
			}
			.slot {
				outline: solid 1px gray;
				padding: 0.5em;
			}
		`,
	],
	template: `
		<h2>Multi slot projection:</h2>
		<ng-content></ng-content>
		<div class="flex">
			<div class="slot"><ng-content select="[slot01]"></ng-content></div>
			<div class="slot"><ng-content select="[slot02]"></ng-content></div>
		</div>
	`,
})
class MultiSlotContentProjectionComponent {}

@Component({
	selector: 'conditional-projection-component',
	template: `
		<h2>Conditional content projection:</h2>
		<ng-container *ngIf="nodeTemplate" [ngTemplateOutlet]="nodeTemplate" ></ng-container>
		<p *ngIf="!nodeTemplate">Using default html because a template wasn't provided</p>
	`,
})
class ConditionalContentProjectionComponent {
	@ContentChild('nodeTemplate') nodeTemplate: TemplateRef<any>;
}

@Component({
	selector: 'conditional-subprojection-component',
	template: `
		<h2>Using sub projection</h2>
		<conditional-projection-component>      
      	
        <ng-template *ngIf="nodeCustomTemplate" #nodeTemplate>
		  <ng-container  [ngTemplateOutlet]="nodeCustomTemplate" ></ng-container>
        </ng-template>
      <ng-template *ngIf="!nodeCustomTemplate" #nodeTemplate>
        Using default template because a #nodeCustomTemplate wasn't provided.
      </ng-template>
		</conditional-projection-component>

    <div><button (click)="print()">print()</button></div>
    
	`,
})
class UsingConditionalContentProjectionComponent {
	@ContentChild('nodeCustomTemplate') nodeCustomTemplate: TemplateRef<any>;

  print(): void {
      console.log('this.nodeCustomTemplate: ', this.nodeCustomTemplate);
  }

}

@Component({
	selector: 'parent-component',
	template: `
		<basic-projection-component> Basic Projection content </basic-projection-component>
		<multi-slot-projection-component>
			<p>Content of a non named slot</p>
			<span slot01>Content of Slot projection 01</span>
			<span slot02>Content of Slot projection 02</span>
		</multi-slot-projection-component>
		<conditional-projection-component>
			What I do here?
			<ng-template #nodeTemplate>
				<!-- If I don't provide this #nodeTemplate conditional-projection-component will render a defaul html -->
				It depends on what you do with it.
			</ng-template>
		</conditional-projection-component>

    <conditional-subprojection-component>      
			<ng-template #nodeCustomTemplate>
				Showing nodeCustomTemplate.
			</ng-template>
    </conditional-subprojection-component>
	`,
})
class ParentComponent {}

@NgModule({
	imports: [CommonModule, RouterModule.forChild([{ path: '', component: ParentComponent }])],
	declarations: [
		ParentComponent,
		BasicContentProjectionComponent,
		MultiSlotContentProjectionComponent,
		ConditionalContentProjectionComponent,
		UsingConditionalContentProjectionComponent,
	],
})
export class ContentProjectionModule {}
