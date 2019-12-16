import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';
import { Profile } from '../Profile';
import { Customer } from 'src/app/Models/Customer';


@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
  })

export class ProfileComponent implements OnInit{
    detail: Customer;
    constructor(private router: Router, private _profileservice: ProfileService){}

    getDetails(){
      this._profileservice.profile(Number.parseInt(localStorage.getItem('id'))).subscribe(data => {
        this.detail = data;
      // console.log(this.detail.FName);
      })
    }

    editProfile(): void {
      localStorage.removeItem("editProfileId");
      this.router.navigate(['/editprofile']);
    }
  
    ngOnInit(){
      this.detail= new Customer;
      this.getDetails();
    }
}