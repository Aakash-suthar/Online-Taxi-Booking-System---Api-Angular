import { Time } from '@angular/common';

export class Booking {
    BookingID: number;
    startdate: Date;
    StartLocation: string;
    EndLocation: string;
    StartTime: Time;
    Amount:number;
    TaxiNumber:number;
    BookingStatus:boolean;
    Trip:boolean;
    EmpId:number;
    CustId:number
    TaxiModel:string;
}