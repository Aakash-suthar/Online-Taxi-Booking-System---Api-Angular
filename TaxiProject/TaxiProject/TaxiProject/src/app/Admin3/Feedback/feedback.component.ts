import { OnInit, Component } from '@angular/core';
import { OTBSService } from 'src/app/Service/otbsservice.service';
import { FeedBack } from 'src/app/Models/Feedback';


@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.component.html',
})

export class FeedbackComponent implements OnInit {
  errormessage:string;
  feedbacklist:FeedBack[];

    constructor(private service:OTBSService){}


  ngOnInit():void{
       this.getfeedback();
}

getfeedback(){
  this.service.getfeedback().subscribe(data=>{
    this.feedbacklist = data;
  }
  );
}



}
