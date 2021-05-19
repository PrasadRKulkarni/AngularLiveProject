import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { Employee } from './employee';
import { Loginemployee } from './login/loginemployee';

@Injectable({
    providedIn: 'root'
})
export class Employeeservice {

    url = 'http://localhost:54868/';

    constructor(private http: HttpClient) { }

    createemployee(employee: Employee): Observable<Employee> {
        return this.http.post<Employee>(this.url + 'api/Employeemasters', employee)
    }

    loginemployee(loginEmployee: Loginemployee): Observable<any> {
        return this.http.post(this.url + 'api/Login', loginEmployee)
    }
}
