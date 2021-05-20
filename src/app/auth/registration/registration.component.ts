import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../employee';
import { Employeeservice } from '../employeeservice';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  regForm: FormGroup;
  datasaved = false;
  massage: string;
  error: false;

  constructor(private formbuilder: FormBuilder,
    private employeeservice: Employeeservice) { }

  ngOnInit() {
    this.setFormState();
  }

  setFormState(): void {
    this.regForm = this.formbuilder.group({
      LastName: ['', [Validators.required]],
      FirstName: ['', [Validators.required]],
      EmailId: ['', [Validators.required]],
      Password: ['', [Validators.required]]
    })
  }

  onSubmit() {

    let employee = this.regForm.value;

    this.createemployee(employee);
    this.regForm.reset();
  }

  employee: Employee = {
    FirstName: null,
    LastName: null,
    EmailId: null,
    Password: null,
  };

  createemployee(employee: Employee) {
    this.employeeservice.SaveEmpInArray(employee);
    this.datasaved = true;
    this.massage = "User Created";
    this.regForm.reset();

    // this.employeeservice.createemployee(employee).subscribe(
    //   () => {
    //     this.datasaved = true;
    //     this.massage = "User Created";
    //     this.regForm.reset();
    //   }
    // )
  }
}