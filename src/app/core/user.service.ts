import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	constructor(private http: HttpClient) { }
	register(user: any) {
		return this.http.get('https://my-domain.com/api/users/v1');
	}
}
