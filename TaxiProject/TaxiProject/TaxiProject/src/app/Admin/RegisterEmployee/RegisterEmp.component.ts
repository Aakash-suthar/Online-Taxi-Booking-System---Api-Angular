import { OnInit, Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OTBSService } from '../../Service/otbsservice.service';


@Component({
    selector:'app-registerEmp',
    templateUrl:'./RegisterEmp.component.html',
    styleUrls:['./RegisterEmp.component.css']
})
export class RegisterEmpComponent implements OnInit{
    AddForm:FormGroup;
    errormessage:string;
    submitted: boolean = false;
    ngOnInit(): void {
        this.AddForm = this.formBuilder.group({
            FirstName: ['', Validators.required],
            LastName: ['', Validators.required],
            Email: ['', [Validators.required, Validators.email]],
            Phone: ['', [Validators.required, Validators.pattern('[0-9]*')]],
            Address: ['', Validators.required],
            Experience: ['', Validators.required],
            Password: ['', Validators.required],
        });
    }
constructor(private formBuilder: FormBuilder,private service : OTBSService){}

onSubmit(){
 this.submitted=true;
 if(this.AddForm.invalid){
    this.errormessage = "Invalid Data";
     return;
 }
     else{
        console.log(this.AddForm.value);
        this.service.postEmp(this.AddForm.value).subscribe(data =>{
            alert("Register");
        },
        (err:any)=>{
          this.errormessage = err.error;
         });

     }
 }
}