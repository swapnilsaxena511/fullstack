import { Component, OnInit } from '@angular/core';
import { Employee } from '../types/employee';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-empadd',
  templateUrl: './empadd.component.html',
  styleUrls: ['./empadd.component.css']
})
export class EmpaddComponent implements OnInit {
  output: any;
  employee: Employee = new Employee() ;
  constructor(private http: HttpClient , private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employee = this.employeeService.getEmployee();
  }

  submitForm() {
      console.log(this.employee);
      return this.http.post<Employee>('http://localhost:8085/demoservice/employee/add', this.employee)
      .subscribe((data) => {
        console.log(data);
        this.employee.name = '';
        this.employee.position = '';
        this.employee.office = '';

        alert('saved succesfully');
      });
  }

}
