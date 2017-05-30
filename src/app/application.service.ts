import { Injectable, Inject } from '@angular/core';
import { Application } from './application';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx'; 
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApplicationService {
 private baseURL: string;
    
    constructor(private http: Http, @Inject('ApiEndpoint') private apiEndpoint: string) {
        this.baseURL = apiEndpoint;
    }

    getAllApplications() {

        return this.http.get(this.baseURL)
            .map((data) => data.json())
            .catch(this.handleError);
    };    

    private handleError(error: Response) {
        console.error(error);
        //return Observable.throw(error.json().error || 'Server error')
        return Observable.throw(new Error(error.statusText));
    }  
       
}