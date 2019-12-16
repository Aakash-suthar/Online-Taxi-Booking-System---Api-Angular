import { OnInit, Component } from '@angular/core';
import { OTBSService } from '../Service/otbsservice.service';
import { Router } from '@angular/router';
@Component({
    selector:'Home',
    templateUrl:'./Home.component.html',
    styleUrls:['./Home.component.css']
})
export class HomeComponent implements OnInit{
    role:string;
    name:string;
    ngOnInit(): void {
        this.role = localStorage.getItem('role');
        if(this.role!='employee')
        { 
            this.router.navigate(['/']);
        }
        else{
            this.name = localStorage.getItem('id');
            this.getemployee();
        }

    }
    logout(){
        localStorage.setItem('id',null);
        localStorage.setItem('role',null);
        this.router.navigate(['/']);
    }
    getemployee(){
        this.service.getemployeebyid(Number.parseInt(localStorage.getItem('id'))).subscribe(data=>{
                this.name = data.FirstName;
        });
    }
    constructor(private service:OTBSService,private router:Router)
    {
        
    }
}