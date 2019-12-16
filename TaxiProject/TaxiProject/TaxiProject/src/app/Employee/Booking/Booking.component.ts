import { OnInit, Component } from '@angular/core';
import { Booking } from 'src/app/Models/Booking';
import { OTBSService } from 'src/app/Service/otbsservice.service';

@Component({
    selector:'Booking',
    templateUrl:'./Booking.component.html',
    styleUrls:['./Booking.component.css']
})
export class BookingComponent implements OnInit{
    public Employeelist:Booking[];
    empID:number;
    constructor(private bookingservice:OTBSService){

    }
    ngOnInit(): void {
        this.getBookingDetail();
     }
 getBookingDetail()
    {     
        this.empID=Number.parseInt(localStorage.getItem('id'));
        console.log(this.empID);
            this.bookingservice.getdetailbyidbooking(this.empID).subscribe(data=>{
                this.Employeelist=data;
            })
       
    }
    public UpdateTrip(book:Booking)
    {
        book.Trip =true;
        this.bookingservice.UpdateDetail(book).subscribe(data=>{
            console.log(data);
            this.getBookingDetail();
        })
    }

    
}