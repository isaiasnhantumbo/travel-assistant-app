# Backend

 - [x] Create RESTful APIs that handle requests for city-specific data.
     
 - [x] Integrate with external APIs from: o openweathermap.org for weather forecasts.
 - [x] exchangeratesapi.io for currency exchange
 - [x] worldbank.org for population and GDP data.
 - [x] Ensure data validation and error handling to manage unexpected inputs and API failures.
 - [ ]  Implement caching strategies to optimize response times and reduce API calls (nice to have). (NOT FINISHED)
 - [x] -   Secure API endpoints.
 - [x] -   Implement rate limiting to prevent abuse of the service.
       


# How to run project

1. You must have a database Postgres  and create .env following the .env.example
2. Run command to install packages `yarn` or `npm install`
3. Run command to create database `yarn db:create` or `npm run db:create`
4. Run migration command `yarn migration:run` or  `npm run migration:run` 
5. Run seed command `yarn seed` or  `npm run seed` 
6. And final run command `yarn dev` or  `npm run dev` 
7. On route /api-docs - we have swagger api documentation



