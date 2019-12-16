import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;
@Component({
    selector: 'app-customer',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class CustomerHomeComponent implements OnInit {
    name:string;
    role:string;
    constructor(private router:Router){}

    ngOnInit(){
this.name = localStorage.getItem('id');
this.role = localStorage.getItem('role');
if(this.role!='customer')
{ 
    this.router.navigate(['/']);
}
else{
    this.name = localStorage.getItem('id');
}

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
    logout(){
      localStorage.setItem('id',null);
      localStorage.setItem('role',null);
      this.router.navigate(['/']);
    }
}