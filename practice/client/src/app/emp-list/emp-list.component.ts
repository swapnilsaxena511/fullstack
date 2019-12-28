import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../types/employee';
import { Router } from '@angular/router';


@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  constructor(private http: HttpClient , private router: Router ,  private employeeService: EmployeeService ) { }
  epmloyees: Array<Employee>;
  urlString: string;
  // tslint:disable-next-line:no-inferrable-types
  showLoader: boolean;

  ngOnInit() {
    return this.http.get('http://localhost:8085/demoservice/employee/employees').
    subscribe((data) => {
      this.showLoader = true;
      console.log(data);
      this.epmloyees = JSON.parse(JSON.stringify(data));
      this.showLoader = false;
     });
  }
  deleteEmp(empId: string) {
    this.urlString = 'http://localhost:8085/demoservice/employee/remove/' + empId;
    const newLocal = 'deleted pls refresh page';
    return this.http.delete(this.urlString).
    subscribe((data) => {
      this.showLoader = true;
      console.log(data);
      alert(newLocal);
      this.showLoader = false;
      });
  }

  editEmp(employee: Employee) {
    console.log(employee);
    this.employeeService.updateEmployee(employee);
    this.router.navigate(['/', 'addemployee']);
  }

  refresh() {
    this.showLoader = true;
    return this.http.get('http://localhost:8085/demoservice/employee/employees').
    subscribe((data) => {
      console.log(data);
      this.epmloyees = JSON.parse(JSON.stringify(data));
      this.showLoader = false;
     });

  }

}
