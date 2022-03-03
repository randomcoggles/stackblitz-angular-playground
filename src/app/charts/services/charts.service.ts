import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ChartsService {
	constructor(private http: HttpClient) {}

	getChartData(dataId = 'data01'): Observable<any> {
		return this.http.get('/assets/bubble-chart-data01.mock.json');
	}

	getBubbleChartData(dataId = 'data01'): Observable<any> {
		return this.http.get('/assets/bubble-chart-data01.mock.json');
	}

  getCoronaVirusNewCases(): Observable<any>{
    return this.http.get('/assets/mocks/d3/corona-virus-new-cases.json');
  }
}
