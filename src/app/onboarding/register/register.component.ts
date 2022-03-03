import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AppHttpSubscription } from '../../core/decorators/ui-http-response';
import { finalize } from 'rxjs/operators';
import { HttpCallInfo } from '../../core/ui/http-call-info';
import { UserService } from '../../core/user.service';
import { cpf } from '../../shared/directives/cpf.directive';
import { CustomValidators } from '../../shared/custom-validators';

// import { AlertService, UserService } from '../_services';

export const CPFValidator  = (control: AbstractControl) => {
  alert('11 chars, please!')
  console.log('---->>> ', control.value);
  return control.value?.toLowerCase().length === 11 
      ? null : {cpf: control.value, message: 'cpf inválido'};
}

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
	
	registerForm: FormGroup;
	loading = false;
	submitted = false;
	userSubscription: any;
	register$: any;
	httpCallInfo: HttpCallInfo;

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private userService: UserService
	) {}

	ngOnInit() {
		this.registerForm = this.formBuilder.group({
			firstName: ['', CustomValidators.required],
			lastName: ['', Validators.required],
			username: ['', Validators.required],
			cpf: [
        '', 
        CustomValidators.cpf(),
        CustomValidators.required
      // Validators.compose([
      //   Validators.required, 
      //   Validators.minLength(11), 
      //   () => () => {
      //     alert(arguments.length)
      //   }])
      
      ],

			password: ['', [Validators.required, Validators.minLength(6)]],
		});
	}

	// convenience getter for easy access to form fields
	get ctrls() {
		return this.registerForm.controls;
	}

	hitHttpCall() {
		const body = this.registerForm.getRawValue();
		this.register$ = this.userService.register(body);

		window['petObservable'] = this.register$;// FIXME: Remove this

		this.httpCallInfo = {
			isLoading: true,
			loadingMessage: 'Wait, saving your pet...',
		};

		this.userSubscription = this.register$
			.pipe(
				finalize(() => {
					this.httpCallInfo.isLoading = false;
				})
			)
			.subscribe({
				next: response => {
					this.httpCallInfo.success = {
						messages: ['Your pet was saved successfully'],
					};
					console.log('Response:\t', response);
				},
				error: errorResponse => {
					this.httpCallInfo.error = {
						messages: ['There has been an error:', errorResponse.message],
					};
					console.log('errorResponse:\t', errorResponse);
				},
			});
		window['petSubscription'] = this.userSubscription;
	}
	

	onSubmit() {
		this.submitted = true;

		// stop here if form is invalid
		if (this.registerForm.invalid) {
			return;
		}

		this.loading = true;
		// this.userService.register(this.registerForm.value)
		//     .pipe(first())
		//     .subscribe(
		//         data => {
		//             this.alertService.success('Registration successful', true);
		//             this.router.navigate(['/login']);
		//         },
		//         error => {
		//             this.alertService.error(error);
		//             this.loading = false;
		//         });
		//
	}

	onAlertClose() {
		console.log('Alert is being close!');
	}
}
