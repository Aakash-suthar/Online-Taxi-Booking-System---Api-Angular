import { OnInit, Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OTBSService } from '../../Service/otbsservice.service';


@Component({
    selector:'app-roaster',
    templateUrl:'./Roaster.component.html',
    // styleUrls:['./Roaster.component.css']
})
export class RoasterDetail implements OnInit{
    addForm:FormGroup
    
    ngOnInit():void {
        this.addForm = this.formBuilder.group({
            empid: ['', Validators.required],
            fromdate: ['', Validators.required],
            todate: ['', Validators.required],
            intime: ['', Validators.required],
            outtime: ['', Validators.required]
        });
     }
     constructor(private formBuilder: FormBuilder,private service : OTBSService){}
     onSubmit(){
        if(this.addForm.invalid){
            console.log("Invalid Data.");
            return;
        }
            else{
               console.log(this.addForm.value);
               this.service.postRoaster(this.addForm.value).subscribe(data =>{
                   alert("Register");
               });
       
            }
        }


}