import { OnInit, Component } from '@angular/core';
import { Booking } from 'src/app/Models/Booking';
import { OTBSService } from 'src/app/Service/otbsservice.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Router } from '@angular/router';

@Component({
    selector:'Booking',
    templateUrl:'./bookingdetails.component.html',
    styleUrls:['./bookingdetails.component.css'],

})
export class CustomerBookingComponent implements OnInit{
    public Bookinglist:Booking[];
    searchText:string;
    dateime:Date;
    constructor(private bookingservice:OTBSService,private router:Router){

    }
    public getBookingDetail()
    {
        
        this.bookingservice.getbookingbyidcust(Number.parseInt(localStorage.getItem('id'))).subscribe(data=>{
            this.Bookinglist=data;
            console.log(data);
        })
        
    }
    feedbackclick(id:number,id2:number){
localStorage.setItem('empid',id.toString());
this.router.navigate(['/customer/feedback']);
    }
    ngOnInit(): void {
       this.getBookingDetail();
    }
    
}