import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NextGP } from '../models/next-gp-model';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private readonly baseUrl = 'http://localhost:8000/api/v1/';

    constructor(private http: HttpClient) { }

    getDriversListByYearGpSessionType(year: string | number, gp: string, session_type: string) {
        return this.http.get(`${this.baseUrl}drivers/${year}/${gp}/${session_type}`);
    }

    getTeamsListByYearGp(year: string | number, gp: string) {
        return this.http.get(`${this.baseUrl}teams/${year}/${gp}/`);
    }

    getNextGP(): Observable<NextGP> {
        return this.http.get<NextGP>(`${this.baseUrl}grandprix/nextGp`);
    }

    getEventsByYear(year: string | number): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}grandprix/eventsByYear/${year}`);
    }
}

