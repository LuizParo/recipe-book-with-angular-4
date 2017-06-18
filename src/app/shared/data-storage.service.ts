import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { AuthService } from './../auth/auth.service';

@Injectable()
export class DataStorageService {

    constructor(private http: Http, private authService: AuthService) {}

    store(url: string, data: any): Observable<Response> {
        const token = this.authService.token;
        return this.http.put(`${url}?auth=${token}`, data);
    }

    fetch(url: string): Observable<any> {
        const token = this.authService.token;
        return this.http.get(`${url}?auth=${token}`)
            .map((response: Response) => response.json());
    }
}