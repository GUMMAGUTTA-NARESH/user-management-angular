
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
private baseURL = "http://localhost:8080/api/users";
private baseAwsUrl = "http://ec2-3-134-78-107.us-east-2.compute.amazonaws.com:8080/api/users";

  constructor(private httpClient: HttpClient) { }
  
  getEmployeesList(urlType:boolean): Observable<Employee[]>{
    if(urlType){
      return this.httpClient.get<Employee[]>(`${this.baseAwsUrl}`);
    }else {
      return this.httpClient.get<Employee[]>(`${this.baseURL}`);
    }
  }

  createEmployee(employee: Employee,urlType:boolean): Observable<Object>{
    if(urlType){
      return this.httpClient.post(`${this.baseAwsUrl}`, employee);
    }else {
      return this.httpClient.post(`${this.baseURL}`, employee);
    }
    
  }

  getEmployeeById(id: number, urlType:boolean): Observable<Employee>{
    if(urlType){
      return this.httpClient.get<Employee>(`${this.baseAwsUrl}/${id}`);
    }else{
      return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
    }
  }

  updateEmployee(id: number, employee: Employee,urlType:boolean): Observable<Object>{
    if(urlType){
      return this.httpClient.put(`${this.baseAwsUrl}/${id}`, employee);
    }else{
      return this.httpClient.put(`${this.baseURL}/${id}`, employee);
    }
    
  }

  deleteEmployee(id: number, urlType:boolean): Observable<Object>{
    if(urlType){
      return this.httpClient.delete(`${this.baseAwsUrl}/${id}`);
    }else {
      return this.httpClient.delete(`${this.baseURL}/${id}`);
    }
  }

  sendEmail(map:any, urlType:boolean){
    if(urlType){
      return this.httpClient.post(this.baseAwsUrl+"/email",map, {responseType:'text' as 'json'});
    }else {
      return this.httpClient.post(this.baseURL+"/email",map, {responseType:'text' as 'json'});
    }
  }

}