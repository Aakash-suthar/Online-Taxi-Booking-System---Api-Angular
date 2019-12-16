import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login/Login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OTBSService } from './Service/otbsservice.service';
import { RegisterComponent } from './Customer/RegisterCustomer/Register.component';
import { RegisterEmpComponent } from './Admin/RegisterEmployee/RegisterEmp.component';
import { AdminComponent } from './Admin/Admin/admin.component';
import { TaxiComponent } from './Admin/TaxiDetails/taxi.component';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BookingDetailsComponent } from './Admin/BookingDetails/bookingdetails.component';
import { TripFilter } from './Pipe/tripfilter.pipe';
import { TripDoneFilter } from './Pipe/tripdonefilter.pipe';
import { BookingStatusFilter } from './Pipe/bookingstatus.pipe';
import { CalenderFilter } from './Pipe/calenderfilter.pipe';
import { FilterPipe } from './Admin/filter.pipe';
import { FeedbackFilterPipe } from './Pipe/filterfeedback.pipe';
import { UserFilterPipe } from './Pipe/filteruser.pipe';
import { CustomerBookingComponent } from './Customer/BookingDetails/bookingdetails.component';
import { ProfileComponent } from './Customer/profilecomponent/profile.component';
import { CustFeedbackComponent } from './Customer/feedbackcomponent/feedback.component';
import { ProfileEmplpoyeeComponent } from './Employee/Profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RegisterEmpComponent,
    UserFilterPipe,
    FeedbackFilterPipe,
    AdminComponent,
    TaxiComponent,
    HomeComponent,
    BookingComponent,
    RosterComponent,
    AvailabilityComponent,
    ManageUser,
    RoasterDetail,
    FeedbackComponent,
    PrintRoaster,
    FeedbackComponent,
    CustomerHomeComponent,
    CustomerBookComponent,
    BookingDetailsComponent,
    TripFilter,
    TripDoneFilter,
    BookingStatusFilter,
    CalenderFilter,
    FilterPipe,
    CustomerBookingComponent,
    ProfileComponent,
    CustFeedbackComponent,
    ProfileEmplpoyeeComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot()
  ],
  providers: [OTBSService],
  bootstrap: [AppComponent]
})
export class AppModule { }
