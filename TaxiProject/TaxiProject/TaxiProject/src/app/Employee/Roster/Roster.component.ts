import { OnInit, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RosterService } from '../Service/Roster.service';
import { Roster } from '../Model/Roster';
import { OTBSService } from 'src/app/Service/otbsservice.service';

@Component({
    selector:'Roster',
    templateUrl:'./Roster.component.html',
    styleUrls:['./Roster.component.css']
})
export class RosterComponent implements OnInit{
    public RosterList:Roster[];
    constructor(private http:HttpClient,private roasterservice:OTBSService){

    }
    ngOnInit(): void {
       this.getRoasterDetails();
    }
    public getRoasterDetails(){
        return this.roasterservice.getdetailbyidroaster(Number.parseInt(localStorage.getItem('id'))).subscribe(data=>{
            this.RosterList=data;
        })
    }
}