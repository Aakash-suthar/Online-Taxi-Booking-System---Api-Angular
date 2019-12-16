import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profile } from './Profile';
import { Customer } from '../Models/Customer';

@Injectable({
    providedIn: 'root'
})

export class ProfileService
{
    baseurl = "http://localhost:54906/api/Cust_Register";

    constructor(private _http:HttpClient){}

    //Display
    // getDetail(){
    //     return this._http.get<Profile[]>(this.baseurl+"/Cust_Register");
    // }

    public profile(custId:number){
        return this._http.get<Customer>(this.baseurl+ "/GetCust_Register?id=" +custId);
    }

    //Update
    updateProfile(profile: Profile) {
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this._http.put<Profile>(this.baseurl + '/PutCust_Register/', profile, httpOptions);
    }
}