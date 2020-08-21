CREATE TABLE [dbo].[StudentGPA] (
    [StudentGPAID] INT          IDENTITY (1, 1) NOT NULL,
    [Name]         VARCHAR (20) NOT NULL,
    [City]         VARCHAR (20) NOT NULL,
    [Department]   VARCHAR (20) NOT NULL,
    [Gender]       VARCHAR (6)  NOT NULL,
    PRIMARY KEY CLUSTERED ([StudentGPAID] ASC)
);


CREATE TABLE [dbo].[tblEmployee] (
    [EmployeeID] INT          IDENTITY (1, 1) NOT NULL,
    [Name]       VARCHAR (20) NOT NULL,
    [City]       VARCHAR (20) NOT NULL,
    [Department] VARCHAR (20) NOT NULL,
    [Gender]     VARCHAR (6)  NOT NULL,
    PRIMARY KEY CLUSTERED ([EmployeeID] ASC)
);


CREATE TABLE [dbo].[tblCities] (
    [CityID]   INT          IDENTITY (1, 1) NOT NULL,
    [CityName] VARCHAR (20) NOT NULL,
    PRIMARY KEY CLUSTERED ([CityID] ASC)
);


INSERT INTO tblCities VALUES('New Delhi');      
INSERT INTO tblCities VALUES('Mumbai');      
INSERT INTO tblCities VALUES('Hyderabad');      
INSERT INTO tblCities VALUES('Chennai');      
INSERT INTO tblCities VALUES('Bengaluru');