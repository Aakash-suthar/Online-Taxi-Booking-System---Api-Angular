import { OnInit, Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OTBSService } from '../../Service/otbsservice.service';
import { Customer } from 'src/app/Models/Customer';


@Component({
    selector:'app-registerEmp',
    templateUrl:'./manageuser.component.html',
    // styleUrls:['./manageuser.component.css']
})
export class ManageUser implements OnInit{
   
    custlist:Customer[];

    constructor(private service : OTBSService){}


    ngOnInit(): void {
        this.getallCust();
    }
    

    getallCust(){
        this.service.getallcust().subscribe(data =>{
        this.custlist = data;
                });
    }


}