import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './Customer/RegisterCustomer/Register.component';
import { RegisterEmpComponent } from './Admin/RegisterEmployee/RegisterEmp.component';
import { AdminComponent } from './Admin/Admin/admin.component';
import { TaxiComponent } from './Admin/TaxiDetails/taxi.component';
import { LoginComponent } from './Login/Login.component';
import { HomeComponent } from './Employee/Home.component';
import { BookingComponent } from './Employee/Booking/Booking.component';
import { RosterComponent } from './Employee/Roster/Roster.component';
import { AvailabilityComponent } from './Employee/Availability/availability.component';
import { ManageUser } from './Admin/ManageUsers/manageuser.component';
import { RoasterDetail } from './Admin/RoasterDetails/roaster.component';
import { PrintRoaster } from './Admin/PrintRoaster/PrintRoaster.component';
import { FeedbackComponent } from './Admin/Feedback/feedback.component';
import { CustomerHomeComponent } from './Customer/homecomponent/home.component';
import { CustomerBookComponent } from './Customer/bookingcomponent/booking.component';
import { BookingDetailsComponent } from './Admin/BookingDetails/bookingdetails.component';
import { CustomerBookingComponent } from './Customer/BookingDetails/bookingdetails.component';
import { ProfileComponent } from './Customer/profilecomponent/profile.component';
import { CustFeedbackComponent } from './Customer/feedbackcomponent/feedback.component';
import { ProfileEmplpoyeeComponent } from './Employee/Profile/profile.component';

const routes: Routes = [
  {
    path:'admin', component:AdminComponent,
    children:[
    {path:'register' , component:RegisterEmpComponent},
    {path:'taxi', component:TaxiComponent},
    {path:'manageuser',component:ManageUser},
    {path:'roasterdetail',component:RoasterDetail},
    {path:'printroaster',component:PrintRoaster},
    {path:'printfeedback',component:FeedbackComponent},
    {path:'bookingtable',component:BookingDetailsComponent}
  ]
},

  {
    path:'Home',component:HomeComponent,
    children:[
      {path:"registeremployee",component:RegisterEmpComponent},
      {path:'Availability',component:AvailabilityComponent},
      {path:'Roster',component:RosterComponent},
      {path:'Booking',component:BookingComponent},
      {path:'profile',component:ProfileEmplpoyeeComponent}

      
    ]
  },
  {
    path:'customer',component:CustomerHomeComponent,
    children:[
      {path:"book",component:CustomerBookComponent},
      {path:"bookcust",component:CustomerBookingComponent},
      {path:"profile",component:ProfileComponent},
      {path:"feedback",component:CustFeedbackComponent}


    ]
  },
  {path:"registercustomer",component:RegisterComponent},
  {
    path:'',component:LoginComponent
  },

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
