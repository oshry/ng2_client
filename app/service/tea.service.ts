// Observable Version
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Tea }           from '../data/tea';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class TeaService {
    constructor (private http: Http) {}

    private teasUrl = 'http://localhost:3000/teas';  // URL to web API

    getTeas (): Observable<Tea[]> {
        return this.http.get(this.teasUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    getTea(id: number): Observable<Tea[]>{
        return this.http.get(this.teasUrl+'/'+id)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}