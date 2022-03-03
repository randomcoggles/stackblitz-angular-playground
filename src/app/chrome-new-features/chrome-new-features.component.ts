import { Component } from '@angular/core';

@Component({
	selector: 'chrome-new-features',
	templateUrl: 'chrome-new-features.component.html',
	styles: [
		`
			.links {
				display: flex;
				gap: 1em;
			}
			.is-active {
				border-bottom: solid 2px;
			}
		`,
	],
})
export class ChromeNewFeaturesComponent {}
