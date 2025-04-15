# acme_hr_directory
Block 33 Workshop
Overview
In this workshop, you'll build an API that the Acme Human Resources (HR) Department can use to manage its employees and departments. A department can have many employees, and an employee must belong to a department.
Directions
The goal of this workshop is to successfully create the routes in the following table:

Routes
GET /api/employees: Returns array of employees.
GET /api/departments: Returns an array of departments.
POST /api/employees: Returns a created employee. The payload is the employee to create.
DELETE /api/employees/:id: Returns nothing. The ID of the employee to delete is passed in the URL.
PUT /api/employees/:id: Returns an updated employee. The payload is the employee to update.
An error handling route that you add and that returns an object with an error property
  Department
  id

  name (STRING)

  Employee
  id

  name (STRING)

  created_at (TIMESTAMP)

  updated_at (TIMESTAMP)

  department_id (INTEGER)

 

Create a GitHub repository named acme_hr_directory. Use the guided practice as a reference.
Create the departments and employees tables. 
Seed the tables with some data. 
Create the express server.
Have the express server listen. 
Test your routes by using cURL, Postman, or both, again using the guided practice as a reference.
Submit your work in the provided space.
 

Rubric
Acme HR Directory (2)
Acme HR Directory (2)
Criteria	Ratings	Pts
This criterion is linked to a Learning OutcomeGET /api/employees
Returns an array of employees
1 to >0.0 pts
Complete
0 pts
Incomplete
1 pts
This criterion is linked to a Learning OutcomeGET /api/departments
Returns an array of departments
1 to >0.0 pts
Complete
0 pts
Incomplete
1 pts
This criterion is linked to a Learning OutcomePOST /api/employees
Uses the employee to create as the payload and returns the created employee
1 to >0.0 pts
Complete
0 pts
Incomplete
1 pts
This criterion is linked to a Learning OutcomeDELETE /api/employees/:id
Passes the id of the employee to delete in the URL and returns nothing
1 to >0.0 pts
Complete
0 pts
Incomplete
1 pts
This criterion is linked to a Learning OutcomePUT /api/employees/:id
Uses the updated employee as the payload and returns the updated employee
1 to >0.0 pts
Complete
0 pts
Incomplete
1 pts
This criterion is linked to a Learning OutcomeError handling
Includes an error handling route that returns an object with an error property
1 to >0.0 pts
Complete
0 pts
Incomplete
1 pts
Total Points: 6

