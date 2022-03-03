import { HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
class RequestConfig {
  url: string;
  error?: any;
  responseBody: any;
}

export class MockUtils {
	mockConfigs: any;
  request: HttpRequest<any>;
  next: HttpHandler;

	constructor(request: HttpRequest<any>, next: HttpHandler) {
    this.request = request;
    this.next = next;
		const reqConfigs = this.mockConfigs = window['mockConfigs'];

		if (reqConfigs[request.url]) {
      const reqConfig = reqConfigs[request.url] as RequestConfig;
      if(reqConfig.error){
        throw reqConfig.error;
      } else {

			next.handle(request).pipe(
				map((event: HttpEvent<any>) => {
					if (event instanceof HttpResponse) {
            
					}
					return event;
				})
			);

      }
		}

	}
}



/*


mockConfigs = {
    "./assets/users.mock.json": {
        getResponse: function(req, next){
            return [
                  {
                     "id": 1,
                     "username": "JohnGreen",
                     "firstName": "John",
                     "lastName": "Green",
                     "email": "john.green@email.com",
                     "password": "P@123abc",
                     "phone": "11987444321",
                     "userStatus": "active",
                     "cloned": true
                  },
                  {
                     "id": 2,
                     "username": "MichaelGreen",
                     "firstName": "Michael",
                     "lastName": "Green",
                     "email": "michael.green@email.com",
                     "password": "P@123abc",
                     "phone": "11987444322",
                     "userStatus": "active"
                  }
               ]
        }
    }
}

    
		const requestStr = {
			url: './assets/users.mock.json',
			body: null,
			reportProgress: false,
			withCredentials: false,
			responseType: 'json',
			method: 'GET',
			headers: {
				normalizedNames: [],
				lazyUpdate: null,
			},
			params: {
				updates: null,
				cloneFrom: null,
				encoder: {},
				map: [['error', ['401']]],
			},
			urlWithParams: './assets/users.mock.json?error=401',
		};
*/