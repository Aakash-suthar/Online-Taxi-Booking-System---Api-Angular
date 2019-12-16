import { OnInit, Component } from '@angular/core';
import { OTBSService } from 'src/app/Service/otbsservice.service';
import { Booking } from 'src/app/Models/Booking';

@Component({
    selector:'Booking',
    templateUrl:'./Booking.component.html',
    styleUrls:['./Booking.component.css']
})
export class BookingComponent implements OnInit{
    public Bookinglist:Booking[];

    constructor(private bookingservice:OTBSService){

    }
    public getBookingDetail()
    {
        this.bookingservice.getdetail().subscribe(data=>{
            this.Bookinglist=data;
        })
        
    }
    ngOnInit(): void {
       this.getBookingDetail();
    }
    
}