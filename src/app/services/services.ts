import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private readonly baseUrl = 'http://localhost:8000/api/v1/';

    constructor(private http: HttpClient) { }

    getDriversListByYearGpSessionType(year: string | number, gp: string, session_type: string) {
        return this.http.get(`${this.baseUrl}drivers/${year}/${gp}/${session_type}`);
    }
}

