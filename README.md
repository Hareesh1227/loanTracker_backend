# Title
    CrediKhaata

## Objective
    The main goal of this assignment is to build a RESTful backend service named "CrediKhaata" that enables shopkeepers to manage customers, 
    record credit sales (loans), track repayments, and receive overdue payment alerts.
## Tech Stack
    - Node.js
- Express
- MongoDB (or alternative database)
- Mongoose (for MongoDB interaction)
- JSON Web Token (JWT) for authentication
- bcryptjs for password hashing
- validator for data validation
- moment.js for date manipulation
- dotenv for environment variable management

## Completion Instructions
### Functionality 
#### Must Have
    - User registration and login with JWT authentication.
- CRUD operations for customer profiles.
- Loan management including creation, viewing, and status tracking.
- Repayment tracking with the ability to record repayments and update loan balances.
- Summary route to calculate total loaned, total collected, overdue amount, and average repayment time.
- Overdue route to list customers with overdue loans.
- SMS/WhatsApp reminder API integration for payment reminders.
- PDF receipt generation for repayments.
- Webhook endpoint to notify external systems when a repayment is recorded.


#### Nice to Have
SMS/WhatsApp reminder API integration for payment reminders.
PDF receipt generation for repayments.
Webhook endpoint to notify external systems when a repayment is recorded.


### Guidelines to develop a project:
- Follow RESTful API design principles.
- Implement user authentication with JWT.
- Ensure proper database interactions and relationships between models.
- Validate input data for customer and loan management.
- Scope customers and loans to the logged-in user.
- Implement consistent error handling and response formatting.
- Use appropriate HTTP status codes for responses.
- Include detailed validation error messages.

### Submission Instructions:
  Submit a link to a GitHub repository containing the project code.
  Include a README.md file with:- A brief description of the project.
  Instructions for setting up and running the project locally.
  A list of dependencies used.
  Descriptions of the API endpoints and their functionality.

#### Must Have
    List the Instructions to follow while submitting the project mentioned in the Assignment, if any

#### Nice to Have
    List the suggested instructions to follow while submitting the project mentioned in the Assignment, if any

## Resources:
### Design files
- No specific design files are required for this assignment.
### APIs
    - No external APIs are required for the basic functionality, but optional APIs for SMS/WhatsApp reminders can be integrated.
### Third-party packages
- express
- mongoose
- jsonwebtoken
- bcryptjs
- validator
- moment
- dotenv
## 

## Required Paths for the Assignment

1. **User  Authentication**
     POST /register : Register a new user.
   - ```
     POST /login : Log in an existing user.
2. **Customer Management**
     POST /customers : Create a new customer.
   - ```
     GET /customers : Retrieve all customers for the logged-in user.
   - ```
     GET /customers/:id : Retrieve a specific customer by ID.
   - ```
     PUT /customers/:id : Update a specific customer's information.
   - ```
     DELETE /customers/:id : Delete a specific customer.
3. **Loan Management**
     POST /loans : Create a new loan for a customer.
   - ```
     GET /loans : Retrieve all active loans for the logged-in user.
   - ```
     GET /loans/:id : Retrieve a specific loan by ID.
   - ```
     PUT /loans/:id : Update a specific loan's information (e.g., status).
   - ```
     GET /loans/status : Filter loans by status (pending, paid, overdue).
4. **Repayment Tracking**
     POST /repayments : Record a repayment for a specific loan.
5. **Loan Summary & Overdue Alerts**
     GET /summary : Get a summary of loans for the logged-in user.
   - ```
     GET /overdue : Get a list of customers with overdue loans.
6. **Optional Features**
     POST /reminders : (If implementing SMS/WhatsApp) Send reminders to customers.
   - ```
     GET /receipts/:id : (If implementing PDF generation) Generate a PDF receipt for a repayment.
   - ```
     POST /webhook : (If implementing webhook) Endpoint to notify external systems of repayments.
