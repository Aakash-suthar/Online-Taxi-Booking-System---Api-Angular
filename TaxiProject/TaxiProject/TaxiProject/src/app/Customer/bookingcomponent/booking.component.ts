import { OnInit, Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { OTBSService } from 'src/app/Service/otbsservice.service';
import { Router } from '@angular/router';
import { Booking } from 'src/app/Models/Booking';

@Component({
    selector: 'app-book',
    templateUrl: './booking.component.html',
  })

export class CustomerBookComponent implements OnInit{
    // bookinglist: Booking[] = [];
    addform: FormGroup;
  errormessage:string;
    submitted: boolean = false;
    formBuilder: any;
    b:Booking;
    location1text:string;
    location2text:string;

    location1:number;
    location2:number;
    constructor(private formbuilder: FormBuilder,private router:Router, private _bookingservice: OTBSService ){}
    ngOnInit(){

        this.addform = this.formbuilder.group ({
          CustId: [''],
            startdate: ['', Validators.required],
            StartLocation: ['', Validators.required],
            EndLocation: ['', Validators.required],
            StartTime: ['', Validators.required],
            Amount: [''],
            TaxiModel: ['', Validators.required],

          })
    }

  onChange(event:Event)
  {
    this.location2text = event.target['options'][event.target['options'].selectedIndex].text;
  }
  onChange2(event:Event)
  {
    this.location1text = event.target['options'][event.target['options'].selectedIndex].text;
  }


    onSubmit() {
      this.submitted = true;
      if (this.addform.invalid) {
        console.log(this.addform.value);
          return;
      }
      else{
        this.addform.controls.CustId.setValue(localStorage.getItem('id'));
        this.location1 = Number.parseInt(this.addform.controls.StartLocation.value);
        this.location2 = Number.parseInt(this.addform.controls.EndLocation.value);
        if((this.location2-this.location1)<0){
          this.addform.controls.Amount.setValue(((this.location2-this.location1)*10)+100);
        }
        else{
          this.addform.controls.Amount.setValue(((this.location2-this.location1)*10)+100);
        }
        this.addform.controls.StartLocation.setValue(this.location1text);
        this.addform.controls.EndLocation.setValue(this.location2text);
      this._bookingservice.createBooking(this.addform.value)
          .subscribe(data => {
              alert(' Cab Booked successfully ..!');
              this.router.navigate(['/customer']);
          })
          ,
            (err:any)=>{
              this.errormessage = err.error;
             }
      }
  }
}