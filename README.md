# Namu darbai

Repo for the QA interview task

## Prerequisites

Before you start, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/)
- [Cypress](https://www.cypress.io/) (Cypress will be installed via `npm`)

## Setup Instructions

### 1. Clone the Repository

https://github.com/SlowKart/cypress-homework.git

### 2. Go to the project folder
cd hostingertests

### 3. install dependencies
npm install

### 4. setup user login info
Create a cypress.env.json file in the root directory.
add the credentials you provided me in the email.
{
  "email": "your-email@example.com",
  "password": "your-password"
}
### 5. Run cypress
npx cypress open
