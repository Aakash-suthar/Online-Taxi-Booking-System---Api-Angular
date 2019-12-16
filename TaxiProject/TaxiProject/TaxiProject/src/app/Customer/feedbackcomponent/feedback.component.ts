import { OnInit, Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OTBSService } from 'src/app/Service/otbsservice.service';

@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.css']
})

export class CustFeedbackComponent implements OnInit
{
    AddForm:FormGroup;
    errormessage:string;
    submitted: boolean = false;
    constructor(private router: Router,private formBuilder: FormBuilder,private _service : OTBSService){}
        // onSubmit(){
        //     this.submitted=true;
        //     if(this.AddForm.invalid){
        //        this.errormessage = "Invalid Data";
        //         return;
        //     }
        //         else{
        //            console.log(this.AddForm.value);
        //            this.service.giveFeedBack(this.AddForm.value).subscribe(data =>{
        //                alert("Feedback Submitted!");
        //            },
        //            (err:any)=>{
        //              this.errormessage = err.error;
        //             });
           
        //         }
        //     }
            ngOnInit():void 
            {
                this.AddForm = this.formBuilder.group({
                    Rating: ['', Validators.required],
                    Comments: ['', Validators.required],
                    empid:  [''],
                    custid:  ['']
                    });   
            }

            onSubmit() {
                this.submitted = true;
                if (this.AddForm.invalid) {
                    return;
                }
                else{
                    this.AddForm.controls.empid.setValue(Number.parseInt(localStorage.getItem('empid')));
                    this.AddForm.controls.custid.setValue(Number.parseInt(localStorage.getItem('id')));
                    console.log(this.AddForm.value);
                this._service.giveFeedBack(this.AddForm.value)
                    .subscribe(data => {
                        alert(' Feedback Added ..!');
                        this.router.navigate(['/customer/bookcust']);
                    })

                            }
                                        }
    }