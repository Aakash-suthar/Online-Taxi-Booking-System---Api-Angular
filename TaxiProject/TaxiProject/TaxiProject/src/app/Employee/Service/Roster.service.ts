import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { Roster } from '../Model/Roster';
@Injectable({
    providedIn:'root'
})
export class RosterService {
url="http://localhost:54906/api/Employee_Roaster";
constructor(private _http:HttpClient)
{

}
getdetail()
{
return this._http.get<Roster[]>(this.url);
}





}
