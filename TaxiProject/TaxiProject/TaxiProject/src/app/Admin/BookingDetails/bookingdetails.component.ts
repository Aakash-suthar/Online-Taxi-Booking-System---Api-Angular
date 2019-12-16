import { OnInit, Component } from '@angular/core';
import { Booking } from 'src/app/Models/Booking';
import { OTBSService } from 'src/app/Service/otbsservice.service';

@Component({
    selector:'Booking',
    templateUrl:'./bookingdetails.component.html',
    styleUrls:['./bookingdetails.component.css'],

})
export class BookingDetailsComponent implements OnInit{
    public Bookinglist:Booking[];
    searchText:string;
    dateime:Date;

    constructor(private bookingservice:OTBSService){

    }
    public getBookingDetail()
    {
        this.bookingservice.getdetail().subscribe(data=>{
            this.Bookinglist=data;
        })
        
    }
    ngOnInit(): void {
        console.log(new Date());
       this.getBookingDetail();
    }
    
}