# Symbiosis 

## Description

Skeleton project as proposed starting point for AND Digital learning resources Application.

## Structure

The project is a maven based structure that consists of the following modules:

### symbiosis-frontend

A basic react based application with two pages, navbar and one 'create resource' form, to demonstrate how it integrates 
with the backend and to assist in demonstrating the BDD Testing

### symbiosis-backend

A minimal spring boot application with one rest endpoint, an in-memory database and a Spring DATA Repository.

### symbiosis-uat

A sample Cucumber based BDD testing framework that uses Selenium to communicate with, and test, the running application
triggered by web page actions and checking results. 

### symbiosis-app

A module to join the frontend and backend into a single, distributable Spring Boot application that can be run as a 
standalone app or deployed to the relevant environment, e.g. AWS


## Development

### Build 

This is a Maven based app and the standard Maven commands can be used to build, test & run the application, either from 
the command line or (preferably) within your IDE

To build the whole application, run the following command in a terminal at the project root (or from your IDE):

    mvn clean install

### Frontend 

The symbiosis-frontend Maven module installs and builds the Jar archive, using Yarn, from standard Maven commands.

However, while the Module is integrated into the Maven structure, this is still a Node based module that uses Yarn as 
it's build tool.

The standard 'yarn' commands (e.g. 'yarn install', 'yarn start') can be used by opening a terminal in the 
symbiosis-frontend directory.

### Backend

The backend is a Spring Boot rest application, written in Java, and contains a REST endpoint to be used by the Web-App
and, initially at least, an in-memory database accessed by a Spring-Data-JPA repository.

There is also (currently) a single test to demonstrate how to test the REST endpoint.


### Live App Development

The project is setup in such a way that the frontend devs can run the frontend and make changes while viewing those 
 changes immediately in an open browser. This enables experimentation and immediate visual feedback.

To assist with this, the backend can also be started and the in-memory database utilized to store any data created, or to 
be viewed on, the front end.


To do this, follow these steps -- 


1) Run Backend:
    
    -- Run class 'com.and.SessionSandboxApplication' in your IDE

   The backend application will 'hot-restart' as you make changes and compile the Java code)


2) Open a terminal in 'symbiosis-frontend' directory and run commands:
    

    yarn install 

    yarn start
    
   A browser window should now be open at localhost:3000
    
   This will 'hot-refresh' in the browser as you make changes and compile the code

4) Now view the results in the browser and code away...


### Acceptance Tests

Acceptance testing code is in symbiosis-uat

   TODO Add Detail
   
   
## Items Still To Do  

This is not a definitive list but includes the following:

- Add Swagger/Open-API 
- Show Lint errors on frontend build
- Integrate with build system (e.g. Jenkins)
- Integrate with actual Databases, DEV/TEST/PROD
- ...



