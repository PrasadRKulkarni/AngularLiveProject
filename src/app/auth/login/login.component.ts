import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { Employeeservice } from '../employeeservice';
import { Loginemployee } from './loginemployee';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  // loginForm: FormGroup;
  // Error = false;
  // massage: string;

  // ngOnInit() {
  // }

  // onSubmit(loginForm: any) {
  // }

  loginForm: FormGroup;
  massage: string;
  Error = false;
  employee: Employee;

  constructor(private employeeservice: Employeeservice,
    private formbuilder: FormBuilder,
    private router: Router) {

  }

  ngOnInit() {
    localStorage.removeItem("Employee");

    this.setFormState();
  }

  setFormState(): void {
    this.loginForm = this.formbuilder.group({
      Username: ['Prasad@gmail.com', [Validators.required]],
      Password: ['prasad', [Validators.required]]
    })
  }

  onSubmit(loginForm: any) {
    let login = this.loginForm.value;
    this.login(login);
  }

  login(loginEmployee: Loginemployee) {

    var success = this.employeeservice.Login(loginEmployee.Username, loginEmployee.Password);

    if (success) {
      this.loginForm.reset();
      localStorage.setItem("Employee", JSON.stringify(success));
      this.router.navigate(['dashboard']);
    }
    else {
      this.Error = true;
      this.massage = "User ID/Password is incorrect.";
    }


    // this.employeeservice.loginemployee(loginEmployee).subscribe(
    //   employee => {
    //     debugger;
    //     var succ = employee;
    //     if (succ) {
    //       this.loginForm.reset();
    //       localStorage.setItem("Employee", JSON.stringify(succ));
    //       this.router.navigate(['dashboard']);
    //     } else {
    //       this.Error = true;
    //       this.massage = "User ID/Password Wrong";
    //     }
    //   }
    // )
  }
}
