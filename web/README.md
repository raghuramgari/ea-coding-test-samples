# Web App

## Getting Started

These instructions will help in setting the project and running it up on your local machine for test automation purpose.

### Pre-requisite softwares

Below software should be installed before project setup,

* Node.js

### Project setup

* Open command prompt/powershell/bash/terminal and run the following commands in this folder,

```
npm install
npm install - g @angular/cli
ng serve
```

* Once, the project is built then open the url http://localhost:4200/festivals in browser


**Note** - These instructions will assist you with setup but you are free to explore tools, processes and techniques for setting up the project.


### Cypress setp

* Open prompt/powershell/bash/terminal and open the web folder of ea-coding-test-sameples project.

and run the below commands to run the cypress

```` 
Headless mode 

npx cypress open 

-------- then launch the E2E test cases 
--------- Run any of the test suit

Headed mode 

npx cypress run

------ Automatically scripts will be run in command line

---- As we have added the html reports, when we run the npx cypress run automatically Report will be generated as index.html.

About the framework and test cases:

** For the festivals, added three different test cases to validate the navigation and festivals on the screen.
** Created a small POM framework to seperate the elements and test scenarios.
** Created a 'src' folder and under src crated a helpers.ts file for page objects. Page objects are really flexible and we can reuse the code instead of adding everywhere.
** I have created a json folder for the data, to avoid hardcoding in test cases. This json file is used to test the screnarios with different combinations of data to cover more scenarios with more data.
** Have written the main test cases under e2e folder, file called festivals.cy.ts
** Have covered three test cases with different validations.

 ----They can validate the url navigation
 ----Proper screen redirection as validating the title
 ----List length validation to know how many festivals are thre in page
 ----To validate the Festival names by the expected in json and actual on screen

 About the Reports:

 -We have added Mocha awesome reports to get the html reports, to know how many are passed and how many are failed in framework.
 -They will be available under Reports foler of cypress.
 -If we run the command called npx cypress run in command line, automatically all the scripts can be run in terminal one by one, and report can be generated under reports section.
 -We can open that report from our local system cypress folder.

 Eexample report.
 HTML report successfully created!
/Users/technoidentity/Documents/Infosys/ea-coding-test-samples/web/cypress/reports/html/index.html

If we copy and paste this in chrome browser, we see the existing report.


