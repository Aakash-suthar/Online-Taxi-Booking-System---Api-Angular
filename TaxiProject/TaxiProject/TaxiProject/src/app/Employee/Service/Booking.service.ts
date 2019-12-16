import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { booking } from '../Model/Booking';
import { Booking } from 'src/app/Models/Booking';
@Injectable({
    providedIn:'root'
})
export class BookingService {
    Booking:booking;
url="http://localhost:54906/BookingDetails";
constructor(private _http:HttpClient)
{

}
getdetail(EmpId:number)
{
    console.log(EmpId);
return this._http.get<Booking[]>(this.url+'/GetBooking/'+EmpId);
}

UpdateDetail(Id:number)
{
    return this._http.put<booking>(this.url+"/Trip/"+Id,this.Booking)
}




}
