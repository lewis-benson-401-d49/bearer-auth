# LAB - 401-D49 Lab-07

## Project: auth-server

### Author: Lewis Benson

### Problem Domain

Fix all the bugs found in the code.
Create an API that uses Auth Basic to create a user, and allow a user to login on /signup and /signin
add Bearer token for a path /users that requires a token to view

### Links and Resources

- [ci/cd](https://github.com/tm-LBenson/auth-server/actions) (GitHub Actions)
- [server-prod](https://d49-auth-server.onrender.com/)

### Setup

#### `.env` requirements (where applicable)

see `.env.sample`

#### How to initialize/run your application (where applicable)

- nodemon

#### Features / Routes

- Feature one: Deploy to Prod

- GET : `/` - specific route to hit

- `/signin` : POST - login as user
- `/signup` : POST - create one user
- `/users` : GET - Read all usernames if user has Bearer token
- `/secret` : GET - View data if user has Bearer token

Task 2: Secure the JWT Tokens
Implement any 2 of these security measures, or any other measure that you can think of or have researched. Use a configuration option for these (i.e. an env setting) so that your system can handle multiple authorization schemes and easily turn them off/on

#### Tests

- How do you run tests?
  - npm test
- Any tests of note?
  - handles root path
  - handles invalid paths
  - handles every CRUD function
- Describe any tests that you did not complete, skipped, etc

#### UML

![UML](./assets/uml.png)
Link to an image of the UML for your application and response to events
