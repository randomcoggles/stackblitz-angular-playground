import {
	HttpInterceptor,
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpResponse,
	HttpClient,
	HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError, merge, combineLatest, concat } from 'rxjs';
import { map, delay, switchMap, concatMap, tap, catchError } from 'rxjs/operators';
import { MockUtils } from './mock-utils';

// ==========   HOW TO MOCK   ==============
/*
Paste this on your console or set it before calling your api.
window.mockConfigs = {
    "https://my-domain.com/api/users/v1": { // <<------- [IMethodMockConfig] The url you want to mock
        mockUrl: "./assets/users.mock.json", // <<------- The url to your mock data
        get: { // <<------- The method you want to mock.
            status: 200 // <<------- The status response you want to mock.
            delay: 3000 // <<------- [Optional] Delay time in miliseconds you want to mock
            subdomain: {
              subdomainUrl: '/1/projects/1' // <<------- subdomain of the api you want to mock. Example: /1/projects/1 - if you want to get the project id:1 of user id:1
              status: 200 // <<------- The status response you want to mock in this subdomain.
              delay: 3000 // <<------- [Optional] Delay time in miliseconds you want to mock in this subdomain
            }
        }
    }
}
 */

interface IMethodMockConfig {
	status?: number; // The status you want to mock: 400, 401, 409, 500, etc.
	delay?: number; // The response delay you want to mock
	[key: string]: any; // Other future attributes
}
class RequestMockConfig {
	url: string; // The api url your want to mock
	errorResponse?: any;
	mockUrl?: string; // The url where to find you mock data
	post?: IMethodMockConfig  | Function | string;
	put?: IMethodMockConfig  | Function | string;
	patch?: IMethodMockConfig  | Function | string;
	get?: IMethodMockConfig  | Function | string;
	delete?: IMethodMockConfig  | Function | string;
}
interface IMethodProperties {
	status?: number; // The status you want to mock: 400, 401, 409, 500, etc.
	delay?: number; // The response delay you want to mock
	[key: string]: any; // Other future attributes
}

class MockResponse {
	methods: {
		post?: IMethodProperties;
		put?: IMethodProperties;
		patch?: IMethodProperties;
		get?: IMethodProperties;
		delete?: IMethodProperties;
	};
}

@Injectable()
export class MockInterceptor implements HttpInterceptor {
	constructor(private http: HttpClient) {}
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const reqConfigs = window['mockConfigs'] || {};
		const reqConfig = reqConfigs[request.url] as RequestMockConfig;
		const method = (request.method || '').toLowerCase();

		if (reqConfig) {
			let body = {};
			if (reqConfig.errorResponse) {
				throw reqConfig.errorResponse;
			} else {
				const configMethod = reqConfig[method];
				if (typeof configMethod === 'function') {
				  return configMethod(request, next);
				} else if (typeof configMethod === 'string') {
					return this.http.get<any>(reqConfig.url).pipe(
						map(resBody => {
							const event = new HttpResponse({});
							//
							event.clone({
								body: resBody && resBody.data,
							});
							return event;
						})
					);
				} else if (typeof configMethod === 'object') {
					if (reqConfig.mockUrl) {
						const delayMiliseconds = configMethod.delay || 0;

						if (configMethod.status < 400) {
							return this.http
								.get<any>(reqConfig.mockUrl)
								.pipe(delay(delayMiliseconds))
								.pipe(
									map((resBody: MockResponse) => {
										const methodInfo = resBody.methods && resBody.methods[method];
										const status = methodInfo[configMethod.status];
										const event = new HttpResponse().clone({
											body: status.data,
										});
										return event;
									})
								);
						} else if (configMethod.status >= 400) {
              const mockSubscription$ = this.http
								.get<any>(reqConfig.mockUrl)
								.pipe(delay(delayMiliseconds))
								.pipe(
									map((resBody: MockResponse) => {
										const methodInfo = resBody.methods && resBody.methods[method];
										const status = methodInfo[configMethod.status];
										const event = new HttpResponse().clone({
											body: status.data,
										});
                    if(status.data) {
                      throw status.data;
                    }
										throw {error: 'No mock data provided!'};
									})
								);
                return mockSubscription$ as any;
						}
					}
				}
			}
		}

		// ========= If there is no mock configs do nothing ==========
		return next.handle(request)
	}
}
