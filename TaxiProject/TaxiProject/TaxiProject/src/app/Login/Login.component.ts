import { OnInit, Component } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from '@angular/forms'
import { OTBSService } from '../Service/otbsservice.service';
import { Login } from '../Models/Login';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector:'app-login',
    templateUrl:'./Login.component.html',
    styleUrls:['./Login.component.css']
})
export class LoginComponent implements OnInit{
    AddForm:FormGroup;
    submitted: boolean = false;
    login:Login=null;

    ngOnInit(): void {
        this.AddForm = this.formBuilder.group({
            UserID: ['',Validators.required],
            Passwd: ['', Validators.required]
        });
    }
constructor(private formBuilder:FormBuilder,private t :OTBSService,private routerr:Router){}

onSubmit() {
    this.submitted = true;
    if (this.AddForm.invalid) {
        alert("Enter details. ");
        return;
    }
    else{
        this.t.getlogin(this.AddForm.controls.UserID.value,this.AddForm.controls.Passwd.value).subscribe(data =>{
            this.login = data;

            if(!data){
                alert("Login failed"); 
            }
            else{
                if(this.login.Roles=='customer'){
                alert("Login success");
                localStorage.setItem('id',data.UserID);
                localStorage.setItem('role',data.Roles);
                this.routerr.navigate(['/customer/book']);
                }
                else if(this.login.Roles=='employee'){
                    alert("Login employee success");
                    localStorage.setItem('id',data.UserID);
                    localStorage.setItem('role',data.Roles);
                this.routerr.navigate(['/Home/Booking']);
                }
                else if(this.login.Roles=='admin'){
                    alert("Login admin success");
                    localStorage.setItem('id',data.UserID); 
                    localStorage.setItem('role',data.Roles);   
                this.routerr.navigate(['/admin/bookingtable']);
                }
            }
        });
    }
    // this.userService.createUser(this.addForm.value)
    //     .subscribe(data => {
    //         alert(this.addForm.controls.firstname.value
    //             + ' record is added successfully ..!');
    //         this.router.navigate(['user']);
    //     })
}

}