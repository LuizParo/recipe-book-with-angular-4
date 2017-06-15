import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataStorageService {

    constructor(private http: Http){}

    store(url: string, data: any): Observable<Response> {
        return this.http.put(url, data);
    }

    fetch(url: string): Observable<any> {
        return this.http.get(url)
            .map((response: Response) => response.json());
    }
}