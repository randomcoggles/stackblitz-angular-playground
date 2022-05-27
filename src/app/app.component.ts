import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { SampleService } from './sample/sample.service';

import { SideNavService } from './shared/components/sidenav/sidenav.service';

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	name = 'Angular';
	mode = new FormControl('side');
	opened: boolean = true;
	routerSub: Subscription;
	constructor(public sampleService: SampleService, private readonly router: Router, public sideNavService: SideNavService ) {
		window['mockConfigs'] = {
			'https://my-domain.com/api/users/v1': {
				// <<------- The url you want to mock
				mockUrl: './assets/users.mock.json', // <<------- The url to your mock data
				get: {
					// <<------- The method you want to mock.
					status: 403, // <<------- The status response you want to mock.

					delay: 300,
				},
			},
		};
	}
	
	ngOnInit() {
		this.routerSub = this.router.events
			.pipe(filter(event => event instanceof NavigationEnd))
			.subscribe(event => {
				window.scrollTo(0, 0);

			});
	}
}


