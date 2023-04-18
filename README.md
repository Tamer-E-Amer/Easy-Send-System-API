# Easy Send System API

## About the Project

This is the API project (Backend part) of the Easysend system of this repo [Easysend front end](https://github.com/Tamer-E-Amer/Easy-Send-System)

## What you find in this project

- This projejct is designed according to best practice of writing Node and express
- IT is based on MCV architecture
- Complete authentication and autherization module
- Some security feature

## Technology used and packages

- Node JS
- Express JS
- Mongoose for Mongodb
- Node mailer
- and more..

## How to run Application

You can run the aplication n your local machin using this command **npm start**

## API end points

- Applications problems

  - Get all application problems: 127.0.0.1:5000/api/v1/appProblems
  - Get an application problem: 127.0.0.1:5000/api/v1/appProblems/64372e4df41044447f3da6aa
  - Create an application problem: 127.0.0.1:5000/api/v1/appProblems/

        ## try it out as the following
        - ```json
        {

    "applicationName": "Buildings tax",
    "version": "4.1.8",
    "problem": "test message: run time error in Buildings tax application",
    "problemDescription": "Test description:This is a tes description of the problem",
    "images": [
    "7.jpg"
    ],
    "office": "Damietta-080",
    "isGeneral": false,
    "computerIP": "10.12.13.124",
    "user": "test user 080",
    "status": "closed",
    "notes": "Test notes here",
    }
    ```

  - Delete an application problem: 127.0.0.1:5000/api/v1/appProblems/64372e4df41044447f3da6a6
  - Update an application problem:127.0.0.1:5000/api/v1/appProblems/64372e4df41044447f3da6aa

  ## API provide feature such as filtering,sorting, selecting fields and pagination

  - 127.0.0.1:5000/api/v1/appProblems?fields=applicationName,version,problemDescription&page=3&limit=2&sort=-applicationName

## The Reade Me file will updated according to what is done in the project.
