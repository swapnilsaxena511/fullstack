import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../types/employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }
  employee: Employee = new Employee() ;
  ngOnInit() {
  }

  navShowEmp() {
    this.router.navigate(['/', 'showEmployee']);
  }

  navAddEmp() {
    this.router.navigate(['/', 'addemployee']);
  }

}
