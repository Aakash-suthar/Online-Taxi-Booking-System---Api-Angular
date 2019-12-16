import { OnInit, Component } from '@angular/core';
import { OTBSService } from '../Service/otbsservice.service';
import { Router } from '@angular/router';
declare var $:any;
@Component({
    selector:'Home',
    templateUrl:'./Home.component.html',
    styleUrls:['./Home.component.css']
})
export class HomeComponent implements OnInit{
    
    name:string;
    role:string;
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
        this.getemployee();
        this.name = localStorage.getItem('id');
        $(document).ready(function () {
            var trigger = $('.hamburger'),
                overlay = $('.overlay'),
               isClosed = false;
           
              trigger.click(function () {
                hamburger_cross();      
              });
          
              function hamburger_cross() {
          
                if (isClosed == true) {          
                  overlay.hide();
                  trigger.removeClass('is-open');
                  trigger.addClass('is-closed');
                  isClosed = false;
                } else {   
                  overlay.show();
                  trigger.removeClass('is-closed');
                  trigger.addClass('is-open');
                  isClosed = true;
                }
            }
            
            $('[data-toggle="offcanvas"]').click(function () {
                  $('#wrapper').toggleClass('toggled');
            });  
          }); 
         
    }
    getemployee(){
        this.service.getemployeebyid(Number.parseInt(localStorage.getItem('id'))).subscribe(data=>{
                this.name = data.FirstName;
        });
    }
    constructor(private service:OTBSService,private router:Router)
    {
        
    }
    logout(){
      localStorage.setItem('id',null);
      localStorage.setItem('role',null);
      this.router.navigate(['/']);
    }
    
}