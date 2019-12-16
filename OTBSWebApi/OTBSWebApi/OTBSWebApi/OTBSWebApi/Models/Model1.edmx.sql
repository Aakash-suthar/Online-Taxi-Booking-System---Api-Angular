
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 09/07/2019 23:26:58
-- Generated from EDMX file: C:\Users\Vishal-PC\Desktop\OTBSWebApi\OTBSWebApi\OTBSWebApi\Models\Model1.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [master];
GO
IF SCHEMA_ID(N'OTBS') IS NULL EXECUTE(N'CREATE SCHEMA [OTBS]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------

IF OBJECT_ID(N'[OTBS].[FK__Availabilit__emp__4066405D]', 'F') IS NOT NULL
    ALTER TABLE [OTBS].[Availabilitytable] DROP CONSTRAINT [FK__Availabilit__emp__4066405D];
GO
IF OBJECT_ID(N'[OTBS].[FK__BookingDe__CustI__6C44C29B]', 'F') IS NOT NULL
    ALTER TABLE [OTBS].[BookingDetails] DROP CONSTRAINT [FK__BookingDe__CustI__6C44C29B];
GO
IF OBJECT_ID(N'[OTBS].[FK__BookingDe__EmpId__6B509E62]', 'F') IS NOT NULL
    ALTER TABLE [OTBS].[BookingDetails] DROP CONSTRAINT [FK__BookingDe__EmpId__6B509E62];
GO
IF OBJECT_ID(N'[OTBS].[FK__BookingDe__TaxiN__6A5C7A29]', 'F') IS NOT NULL
    ALTER TABLE [OTBS].[BookingDetails] DROP CONSTRAINT [FK__BookingDe__TaxiN__6A5C7A29];
GO
IF OBJECT_ID(N'[OTBS].[FK__Employee___EmpId__1D1D0420]', 'F') IS NOT NULL
    ALTER TABLE [OTBS].[Employee_Roaster] DROP CONSTRAINT [FK__Employee___EmpId__1D1D0420];
GO
IF OBJECT_ID(N'[OTBS].[FK__FeedBack__custid__47133DEC]', 'F') IS NOT NULL
    ALTER TABLE [OTBS].[FeedBack] DROP CONSTRAINT [FK__FeedBack__custid__47133DEC];
GO
IF OBJECT_ID(N'[OTBS].[FK__FeedBack__empid__48076225]', 'F') IS NOT NULL
    ALTER TABLE [OTBS].[FeedBack] DROP CONSTRAINT [FK__FeedBack__empid__48076225];
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[OTBS].[Availabilitytable]', 'U') IS NOT NULL
    DROP TABLE [OTBS].[Availabilitytable];
GO
IF OBJECT_ID(N'[OTBS].[BookingDetails]', 'U') IS NOT NULL
    DROP TABLE [OTBS].[BookingDetails];
GO
IF OBJECT_ID(N'[OTBS].[Cust_Register]', 'U') IS NOT NULL
    DROP TABLE [OTBS].[Cust_Register];
GO
IF OBJECT_ID(N'[OTBS].[Emp_Register]', 'U') IS NOT NULL
    DROP TABLE [OTBS].[Emp_Register];
GO
IF OBJECT_ID(N'[OTBS].[Employee_Roaster]', 'U') IS NOT NULL
    DROP TABLE [OTBS].[Employee_Roaster];
GO
IF OBJECT_ID(N'[OTBS].[FeedBack]', 'U') IS NOT NULL
    DROP TABLE [OTBS].[FeedBack];
GO
IF OBJECT_ID(N'[OTBS].[Location]', 'U') IS NOT NULL
    DROP TABLE [OTBS].[Location];
GO
IF OBJECT_ID(N'[OTBS].[Logintable]', 'U') IS NOT NULL
    DROP TABLE [OTBS].[Logintable];
GO
IF OBJECT_ID(N'[OTBS].[TaxiDetails]', 'U') IS NOT NULL
    DROP TABLE [OTBS].[TaxiDetails];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'Availabilitytables'
CREATE TABLE [OTBS].[Availabilitytables] (
    [aid] int IDENTITY(1,1) NOT NULL,
    [emp] int  NULL,
    [selectdate] datetime  NULL
);
GO

-- Creating table 'BookingDetails'
CREATE TABLE [OTBS].[BookingDetails] (
    [BookingID] int IDENTITY(3000,1) NOT NULL,
    [Amount] float  NULL,
    [StartLocation] varchar(30)  NULL,
    [EndLocation] varchar(30)  NULL,
    [StartTime] time  NULL,
    [TaxiNumber] int  NULL,
    [BookingStatus] bit  NULL,
    [Trip] bit  NULL,
    [EmpId] int  NULL,
    [CustId] int  NULL
);
GO

-- Creating table 'Cust_Register'
CREATE TABLE [OTBS].[Cust_Register] (
    [CustID] int IDENTITY(100,1) NOT NULL,
    [FName] varchar(20)  NOT NULL,
    [LName] varchar(20)  NOT NULL,
    [Contact] varchar(10)  NOT NULL,
    [EmailId] varchar(30)  NOT NULL,
    [CustAddress] varchar(100)  NOT NULL,
    [Pincode] int  NOT NULL,
    [CustPasswd] varchar(10)  NOT NULL
);
GO

-- Creating table 'Emp_Register'
CREATE TABLE [OTBS].[Emp_Register] (
    [EmpID] int IDENTITY(200,1) NOT NULL,
    [FirstName] varchar(20)  NOT NULL,
    [LastName] varchar(20)  NOT NULL,
    [Phone] varchar(10)  NOT NULL,
    [Email] varchar(30)  NOT NULL,
    [Address] varchar(100)  NOT NULL,
    [Experience] int  NOT NULL,
    [Password] varchar(10)  NOT NULL
);
GO

-- Creating table 'Employee_Roaster'
CREATE TABLE [OTBS].[Employee_Roaster] (
    [RoasterID] int IDENTITY(300,1) NOT NULL,
    [EmpId] int  NULL,
    [FromDate] datetime  NULL,
    [ToDate] datetime  NULL,
    [InTime] time  NULL,
    [OutTime] time  NULL
);
GO

-- Creating table 'FeedBacks'
CREATE TABLE [OTBS].[FeedBacks] (
    [feedbackID] int IDENTITY(1,1) NOT NULL,
    [Rating] float  NULL,
    [Comments] varchar(100)  NULL,
    [empid] int  NULL,
    [custid] int  NULL
);
GO

-- Creating table 'Locations'
CREATE TABLE [OTBS].[Locations] (
    [LocationID] int IDENTITY(1,1) NOT NULL,
    [LocationName] varchar(50)  NULL
);
GO

-- Creating table 'Logintables'
CREATE TABLE [OTBS].[Logintables] (
    [UserID] int  NOT NULL,
    [Passwd] varchar(10)  NOT NULL,
    [Roles] varchar(20)  NOT NULL
);
GO

-- Creating table 'TaxiDetails'
CREATE TABLE [OTBS].[TaxiDetails] (
    [TaxiID] int IDENTITY(1,1) NOT NULL,
    [TaxiNumber] varchar(20)  NULL,
    [TaxiModel] varchar(30)  NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [aid] in table 'Availabilitytables'
ALTER TABLE [OTBS].[Availabilitytables]
ADD CONSTRAINT [PK_Availabilitytables]
    PRIMARY KEY CLUSTERED ([aid] ASC);
GO

-- Creating primary key on [BookingID] in table 'BookingDetails'
ALTER TABLE [OTBS].[BookingDetails]
ADD CONSTRAINT [PK_BookingDetails]
    PRIMARY KEY CLUSTERED ([BookingID] ASC);
GO

-- Creating primary key on [CustID] in table 'Cust_Register'
ALTER TABLE [OTBS].[Cust_Register]
ADD CONSTRAINT [PK_Cust_Register]
    PRIMARY KEY CLUSTERED ([CustID] ASC);
GO

-- Creating primary key on [EmpID] in table 'Emp_Register'
ALTER TABLE [OTBS].[Emp_Register]
ADD CONSTRAINT [PK_Emp_Register]
    PRIMARY KEY CLUSTERED ([EmpID] ASC);
GO

-- Creating primary key on [RoasterID] in table 'Employee_Roaster'
ALTER TABLE [OTBS].[Employee_Roaster]
ADD CONSTRAINT [PK_Employee_Roaster]
    PRIMARY KEY CLUSTERED ([RoasterID] ASC);
GO

-- Creating primary key on [feedbackID] in table 'FeedBacks'
ALTER TABLE [OTBS].[FeedBacks]
ADD CONSTRAINT [PK_FeedBacks]
    PRIMARY KEY CLUSTERED ([feedbackID] ASC);
GO

-- Creating primary key on [LocationID] in table 'Locations'
ALTER TABLE [OTBS].[Locations]
ADD CONSTRAINT [PK_Locations]
    PRIMARY KEY CLUSTERED ([LocationID] ASC);
GO

-- Creating primary key on [UserID] in table 'Logintables'
ALTER TABLE [OTBS].[Logintables]
ADD CONSTRAINT [PK_Logintables]
    PRIMARY KEY CLUSTERED ([UserID] ASC);
GO

-- Creating primary key on [TaxiID] in table 'TaxiDetails'
ALTER TABLE [OTBS].[TaxiDetails]
ADD CONSTRAINT [PK_TaxiDetails]
    PRIMARY KEY CLUSTERED ([TaxiID] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [emp] in table 'Availabilitytables'
ALTER TABLE [OTBS].[Availabilitytables]
ADD CONSTRAINT [FK__Availabilit__emp__4066405D]
    FOREIGN KEY ([emp])
    REFERENCES [OTBS].[Emp_Register]
        ([EmpID])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK__Availabilit__emp__4066405D'
CREATE INDEX [IX_FK__Availabilit__emp__4066405D]
ON [OTBS].[Availabilitytables]
    ([emp]);
GO

-- Creating foreign key on [CustId] in table 'BookingDetails'
ALTER TABLE [OTBS].[BookingDetails]
ADD CONSTRAINT [FK__BookingDe__CustI__5DF6A344]
    FOREIGN KEY ([CustId])
    REFERENCES [OTBS].[Cust_Register]
        ([CustID])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK__BookingDe__CustI__5DF6A344'
CREATE INDEX [IX_FK__BookingDe__CustI__5DF6A344]
ON [OTBS].[BookingDetails]
    ([CustId]);
GO

-- Creating foreign key on [EmpId] in table 'BookingDetails'
ALTER TABLE [OTBS].[BookingDetails]
ADD CONSTRAINT [FK__BookingDe__EmpId__5D027F0B]
    FOREIGN KEY ([EmpId])
    REFERENCES [OTBS].[Emp_Register]
        ([EmpID])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK__BookingDe__EmpId__5D027F0B'
CREATE INDEX [IX_FK__BookingDe__EmpId__5D027F0B]
ON [OTBS].[BookingDetails]
    ([EmpId]);
GO

-- Creating foreign key on [TaxiNumber] in table 'BookingDetails'
ALTER TABLE [OTBS].[BookingDetails]
ADD CONSTRAINT [FK__BookingDe__TaxiN__5C0E5AD2]
    FOREIGN KEY ([TaxiNumber])
    REFERENCES [OTBS].[TaxiDetails]
        ([TaxiID])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK__BookingDe__TaxiN__5C0E5AD2'
CREATE INDEX [IX_FK__BookingDe__TaxiN__5C0E5AD2]
ON [OTBS].[BookingDetails]
    ([TaxiNumber]);
GO

-- Creating foreign key on [custid] in table 'FeedBacks'
ALTER TABLE [OTBS].[FeedBacks]
ADD CONSTRAINT [FK__FeedBack__custid__47133DEC]
    FOREIGN KEY ([custid])
    REFERENCES [OTBS].[Cust_Register]
        ([CustID])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK__FeedBack__custid__47133DEC'
CREATE INDEX [IX_FK__FeedBack__custid__47133DEC]
ON [OTBS].[FeedBacks]
    ([custid]);
GO

-- Creating foreign key on [EmpId] in table 'Employee_Roaster'
ALTER TABLE [OTBS].[Employee_Roaster]
ADD CONSTRAINT [FK__Employee___EmpId__1D1D0420]
    FOREIGN KEY ([EmpId])
    REFERENCES [OTBS].[Emp_Register]
        ([EmpID])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK__Employee___EmpId__1D1D0420'
CREATE INDEX [IX_FK__Employee___EmpId__1D1D0420]
ON [OTBS].[Employee_Roaster]
    ([EmpId]);
GO

-- Creating foreign key on [empid] in table 'FeedBacks'
ALTER TABLE [OTBS].[FeedBacks]
ADD CONSTRAINT [FK__FeedBack__empid__48076225]
    FOREIGN KEY ([empid])
    REFERENCES [OTBS].[Emp_Register]
        ([EmpID])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK__FeedBack__empid__48076225'
CREATE INDEX [IX_FK__FeedBack__empid__48076225]
ON [OTBS].[FeedBacks]
    ([empid]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------