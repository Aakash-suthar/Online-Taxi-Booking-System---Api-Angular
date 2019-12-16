import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';


import { Availability } from '../Model/Availability';
@Injectable({
    providedIn:'root'
})
export class AvailabilityService {
url="http://localhost:54906/api/";
constructor(private _http:HttpClient)
{

}






}
