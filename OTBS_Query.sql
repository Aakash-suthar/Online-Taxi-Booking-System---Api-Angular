--Online Taxi Booking System

--creating schema
create schema [OTBS]

--Employee Table
create table [OTBS].Emp_Register
(
	EmpID int identity(100,1) primary key not null,
	FirstName varchar(20) not null,
	LastName varchar(20) not null,
	Phone varchar(10) unique not null,
	Email varchar(30) not null,
	Address varchar(100) not null,
	Experience int not null,
	Password varchar(10) not null
)

--Customer Table
create table [OTBS].Cust_Register
(
	CustID int identity(200,1) primary key not null,
	FName varchar(20) not null,
	LName varchar(20) not null,
	Contact varchar(10) unique not null,
	EmailId varchar(30) not null,
	CustAddress varchar(100) not null,
	Pincode int not null,
	CustPasswd varchar(10) not null
)

--Login Table
create table [OTBS].Login
(
	UserID varchar(10) not null,
	Passwd varchar(10) not null,
	Roles varchar(20) not null
)

--Taxi Table
create table [OTBS].TaxiDetails
(
	TaxiID int identity(1000,1) not null,
	TaxiNumber varchar(10) primary key,
	TaxiModel varchar(30)
)

--Booking Table
create table [OTBS].BookingDetails
(
	BookingID int identity(1000,1) primary key not null,
	Amount float,
	StartLocation varchar(30),
	EndLocation varchar(30),
	StartTime time(7),
	TaxiNumber varchar(10) foreign key references [OTBS].TaxiDetails(TaxiNumber),
	BookingStatus bit,
	Trip bit,
	EmpId int foreign key references [OTBS].Emp_Register(EmpID),
	CustId int foreign key references [OTBS].Cust_Register(CustID),
	StartDate Date,
	TaxiModel varchar(20)
)

--Employee Roaster Table
create table [OTBS].Employee_Roaster
(
	RoasterID int identity(1,1),
	EmpId int foreign key references [OTBS].Emp_Register(EmpID),
	FromDate date,
	ToDate date,
	InTime time(7),
	OutTime time(7)
)

--Feedback Table
create table [OTBS].FeedBack
(
	feedbackID int identity(500,1) primary key,
	Rating varchar(50),
	Comments varchar(100),
	empid int foreign key references [OTBS].Emp_Register(EmpID),
	custid int foreign key references [OTBS].Cust_Register(CustID),
)

--Location Table
create table [OTBS].Location
(
	LocationID int identity(0,1) primary key,
	LocationName varchar(50)
)


select * from [OTBS].BookingDetails

delete from OTBS.BookingDetails where BookingID = 1013

insert into [OTBS].BookingDetails values(100,'Andheri','Borivali','12:30','MH004',1,1,100,201,'09/12/2019', '4 Seater')
insert into [OTBS].BookingDetails values(200,'Andheri','Kalyan','11:30','MH004',0,0,100,201,'09/12/2019', '4 Seater')
insert into [OTBS].BookingDetails values(100,'Andheri','Borivali','12:30','MH005',0,0,102,201,'10/12/2019', '6 Seater')
insert into [OTBS].BookingDetails values(100,'Andheri','Borivali','12:30','MH005',0,0,101,201,'10/12/2019', '4 Seater')