import { OnInit, Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { OTBSService } from 'src/app/Service/otbsservice.service';
import { Roaster } from 'src/app/Models/Roaster';


@Component({
    selector: 'app-printroaster',
    templateUrl: './PrintRoaster.component.html',
})

export class PrintRoaster implements OnInit {
  errormessage:string;
  roaster:Roaster[];

    constructor(private service:OTBSService){}


  ngOnInit():void{
       this.getroaster();
}

getroaster(){
  this.service.getroaster().subscribe(data=>{
    this.roaster = data;
  }
  );
}



}
