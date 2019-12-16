import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
    name:string;
    role:string;
    constructor(private router:Router){}

    ngOnInit(){
        this.role = localStorage.getItem('role');
        if(this.role!='admin')
        { 
            this.router.navigate(['/']);
        }
        else{
            this.name = localStorage.getItem('id');
        }

    }
    logout(){
        localStorage.setItem('id',null);
        localStorage.setItem('role',null);
        this.router.navigate(['/']);
    }
}