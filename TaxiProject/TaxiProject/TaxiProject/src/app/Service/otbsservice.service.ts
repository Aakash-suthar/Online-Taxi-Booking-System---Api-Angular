import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

import { Observable } from 'rxjs/internal/Observable';
import { Login } from '../Models/Login';
import { Customer } from '../Models/Customer';
import { Employee } from '../Models/Employee';
import { Booking } from '../Models/Booking';
import { Availabilitytable } from '../Models/Availabilitytable';
import { Taxi } from '../Models/Taxi';
import { Roaster } from '../Models/Roaster';
import { FeedBack } from '../Models/Feedback';

@Injectable({
  providedIn: 'root'
})
export class OTBSService {
    profilebyemployeecust(empID: any) {
      return this._http.get<Employee>("http://localhost:54906/api/Emp_Register/"+empID);
    }
    UpdateDetail(Ibook:Booking) {
      return this._http.put("http://localhost:54906/api/BookingDetails/"+Ibook.BookingID,Ibook);
    }
    giveFeedBack(feed:FeedBack) {
      return this._http.post("http://localhost:54906/api/FeedBacks/",feed);
        }
    getbookingbyidcust(arg0: number):Observable<Booking[]> {
      return this._http.get<Booking[]>('http://localhost:54906/api/BookingDetails/'+arg0);
    }

    getdetailbyidbooking(EmpId:number)
  {
  return this._http.get<Booking[]>('http://localhost:54906/api/EmployeeBooking/'+EmpId);
  }

  getdetailbyidroaster(EmpId:number)
  {
  return this._http.get<Roaster[]>('http://localhost:54906/api/EmployeeRoaster/'+EmpId);
  }
   

  url = "http://localhost:54906/login";


  constructor(private _http: HttpClient) {

  }

  getlogin(id:number,pass:string):Observable<Login>
  {
     return  this._http.get<Login>(this.url+'/check/'+id+'/'+pass);
  }

  createBooking(sup: Booking) {
    return this._http.post("http://localhost:54906/api/BookingDetails/", sup);
}

getdetail()
{
return this._http.get<Booking[]>('http://localhost:54906/api/BookingDetails');
}

  getallcust(){
    return this._http.get<Customer[]>("http://localhost:54906/api/Cust_Register/");
  }
  editcustomer(id:number,cust:Customer){
    console.log(cust);
    return this._http.put("http://localhost:54906/api/Cust_Register/"+id,cust);
  }
  postCust(customer:Customer){
    console.log(customer);
     return this._http.post("http://localhost:54906/api/Cust_Register"+"/",customer); 
    
  }
  postEmp(customer:Employee){
    console.log(customer);
     return this._http.post("http://localhost:54906/api/Emp_Register"+"/",customer); 
    
  }
  editemp(id:number,cust:Employee){
    console.log(cust);
    return this._http.put("http://localhost:54906/api/Emp_Registe/"+id,cust);
  }

  postBook(book:Booking){
    console.log(book);
    return this._http.post("http://localhost:54906/api/BookingDetails/",book);
  }

  postavailability(avail:Availabilitytable){
  console.log(avail);
  return this._http.post("http://localhost:54906/api/Availabilitytables/",avail);
  }

  posttaxi(taxi:Taxi){
  console.log(taxi);
  return this._http.post("http://localhost:54906/api/TaxiDetails/",taxi);

  }

  gettaxi(){
    return this._http.get<Taxi[]>("http://localhost:54906/api/TaxiDetails/");
  }

  postRoaster(roaster:Roaster){
return this._http.post("http://localhost:54906/api/Employee_Roaster/",roaster);
  }

  getroaster(){

    return this._http.get<Roaster[]>("http://localhost:54906/api/Employee_Roaster/");
  }

  getfeedback() {
    return this._http.get<FeedBack[]>("http://localhost:54906/api/FeedBacks/");
 
  }

getemployeebyid(id:number){
  return this._http.get<Employee>("http://localhost:54906/api/Emp_Register/"+id);
}

}
