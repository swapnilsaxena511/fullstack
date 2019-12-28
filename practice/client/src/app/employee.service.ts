import { Injectable } from '@angular/core';
import {Employee} from './types/employee' ;
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) { }
  epmloyee: Employee = new Employee();
//   getAllEmployees(): Observable<Employee[]> {
//   //   //return  this.epmloyees ;
//     return this.http.get('http://localhost:8085/demoservice/employee/employees');
//    }
  updateEmployee(employee: Employee) {
    this.epmloyee = employee ;
  }

  getEmployee() {
    return this.epmloyee;
  }

}
