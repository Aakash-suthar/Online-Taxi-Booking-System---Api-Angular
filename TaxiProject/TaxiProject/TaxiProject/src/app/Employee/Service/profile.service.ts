import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/app/Models/Employee';

@Injectable()

export class ProfileService{

    url="http://localhost:54906/api/Emp_Register";
    constructor(private  _http:HttpClient){}
    
    public profile(EmpId:number){
        return this._http.get<Employee>(this.url+ "/GetEmp_Register?id=" +EmpId);
    }
}