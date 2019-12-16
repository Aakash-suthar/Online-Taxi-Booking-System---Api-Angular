import { OnInit, Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OTBSService } from '../../Service/otbsservice.service';


@Component({
    selector:'app-register',
    templateUrl:'./Register.component.html',
    styleUrls:['./Register.component.css']
})
export class RegisterComponent implements OnInit{
    AddForm:FormGroup;
    submitted: boolean = false;
    errormessage:string;
    ngOnInit(): void {
        this.AddForm = this.formBuilder.group({
            FName: ['', Validators.required],
            LName: ['', Validators.required],
            EmailId: ['', [Validators.required, Validators.email]],
            Contact: ['', [Validators.required, Validators.pattern('[0-9]*')]],
            CustAddress: ['', Validators.required],
            Pincode: ['',[ Validators.required, Validators.pattern('[0-5]*')]],
            CustPasswd: ['', Validators.required],
        });
    }
constructor(private formBuilder: FormBuilder,private service  : OTBSService){}

onSubmit(){
    this.submitted=true;
    if(this.AddForm.invalid){
        this.errormessage = "Invalid Data";
        return;
        }
    else{
        console.log(this.AddForm.value);
            this.service.postCust(this.AddForm.value).subscribe(data =>{
                alert("Register");
            },
            (err:any)=>{
              this.errormessage = err.error;
             }
            );

        }
    }
}
