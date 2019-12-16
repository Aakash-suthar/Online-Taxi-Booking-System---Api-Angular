import { OnInit, Component } from '@angular/core';
import { Availability } from '../Model/Availability';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
    selector:'availability',
    templateUrl:'./availability.component.html',
    styleUrls:['./availability.component.css']
})
export class AvailabilityComponent implements OnInit{
    addForm:FormGroup;
    submitted: boolean = false;
    constructor(private formBuilder: FormBuilder){

    }
    
    ngOnInit(): void {
        this.addForm = this.formBuilder.group({
            emp: ['',Validators.required],
            selectdate: ['', Validators.required]
    })
}

onSubmit(){
        this.submitted=true;
        if(this.addForm.invalid){
            return;
    }
}
}