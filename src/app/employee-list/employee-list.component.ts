import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee'
import { EmployeeService } from '../employee.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

   employees: Employee[];
   public message:any;
  urlType: boolean = true;
  showMsg: boolean = false;
  public to :any;
  public subject :any;
  public body :any;

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployees(this.urlType);
  }

  private getEmployees(urlType:boolean){
    this.employeeService.getEmployeesList(urlType).subscribe(data => {
      this.employees = data;
    });
  }

  employeeDetails(id: number, urlType:boolean){
    this.router.navigate(['employee-details', id]);
  }

  updateEmployee(id: number, urlType:boolean){
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number, urlType:boolean){
    this.employeeService.deleteEmployee(id, urlType).subscribe( data => {
      console.log(data);
      this.getEmployees(this.urlType);
    })
  }
}
