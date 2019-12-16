import { OnInit, Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Taxi } from 'src/app/Models/Taxi';
import { OTBSService } from 'src/app/Service/otbsservice.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
    selector: 'app-taxi',
    templateUrl: './taxi.component.html',
    styleUrls: ['./taxi.component.css']
})

export class TaxiComponent implements OnInit {
  addForm: FormGroup;
  errormessage:string;
  taxiall:Taxi[];
  // taxi:Taxi;

    constructor(private formBuilder: FormBuilder,private service:OTBSService){}



  ngOnInit():void{
    this.addForm = this.formBuilder.group({
      taxinumber: ['', Validators.required],
       taximodel: ['',Validators.required]
       })

       this.getall();

    

}

getall(){
  this.service.gettaxi().subscribe(data=>{
    this.taxiall = data;
  }
  );
}

onSubmit(){
  if(this.addForm.invalid){

    return;
  }
  else{
      //  this.taxi.TaxiModel =  this.addForm.controls.taximodel.value;
      //  this.taxi.TaxiNumber = this.addForm.controls.taxinumber.value;
    // console.log(this.taxi);
    this.service.posttaxi(this.addForm.value).subscribe(
      data=>{},
      (err:any)=>{
        this.errormessage = err.error;
       }
    );
   // alert("taxi added.");
    this.clear();
    this.getall();

  }   
}
clear(){
  this.addForm.controls.taxinumber.setValue("");
  // this.addForm.controls.taximodel.setValue("");
  this.getall();
}

}
