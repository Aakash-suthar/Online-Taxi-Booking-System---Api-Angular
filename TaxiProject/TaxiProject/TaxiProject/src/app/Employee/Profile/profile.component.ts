import { OnInit, Component } from '@angular/core';
import { ProfileService } from '../Service/profile.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Employee } from 'src/app/Models/Employee';
import { OTBSService } from 'src/app/Service/otbsservice.service';
@Component({
    selector:'app-profile',
    templateUrl:'./profile.component.html'
})
export class ProfileEmplpoyeeComponent implements OnInit{
   empID:any;
   employee:any;
   profileForm:FormGroup;

   constructor(private employeeService:OTBSService,private fb:FormBuilder){}
    ngOnInit(): void {
        this.profileForm=this.fb.group({
            FirstName:['',[Validators.required]],
            LastName:['',[Validators.required]],
            Email:['',[Validators.required]],
            Phone:['',[Validators.required]],
            Experience:['',[Validators.required]],
            Address:['',[Validators.required]]
        
        });
        
      this.employeeProfile(this.employee);
        

    }

    public employeeProfile(employee:Employee){
        this.empID=JSON.parse(localStorage.getItem('id'));
      return this.employeeService.profilebyemployeecust(this.empID).subscribe(x=> {
          if(x!=null){
           
             //alert('Record Found');
              this.profileForm.controls["FirstName"].setValue(x.FirstName); 
              this.profileForm.controls["LastName"].setValue(x.LastName); 
              this.profileForm.controls["Phone"].setValue(x.Phone);      
              this.profileForm.controls["Email"].setValue(x.Email); 
             this.profileForm.controls["Address"].setValue(x.Address); 
             this.profileForm.controls["Experience"].setValue(x.Experience); 

          }
          else{
              alert("Record Not Found");
          }
      });
    }




}