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

    emp: Employee;

    private listEmployees: Employee[] = [
        {
            FirstName: "Prasad",
            LastName: "Kulkarni",
            EmailId: "Prasad@gmail.com",
            Password: "prasad"
        }
    ];


    constructor(private http: HttpClient) {

    }

    createemployee(employee: Employee): Observable<Employee> {
        return this.http.post<Employee>(this.url + 'api/Employeemasters', employee)
    }

    loginemployee(loginEmployee: Loginemployee): Observable<any> {
        return this.http.post(this.url + 'api/Login', loginEmployee)
    }

    SaveEmpInArray(emp: Employee) {
        this.listEmployees.push(emp);
    }

    Login(InputEmailId: string, InputPassword: string): Employee {

        this.emp = this.listEmployees.find(e => e.EmailId === InputEmailId && e.Password === InputPassword)

        return this.emp;

    }
}
