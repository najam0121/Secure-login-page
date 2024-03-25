# Secure-login-page
In login and signup portal project, including frontend, backend, and database technologies.

## About the Project:

Our Sign In and Sign Up portal project aims to provide users with a secure and user-friendly authentication system. The portal will allow users to create accounts, log in and access various features of our platform.

The login page and sign-up project is a multi-language endeavor that integrates various packages to create a secure and efficient authentication system. This project showcases the utilization of programming languages and libraries to achieve a seamless user experience.


## Tech Stack:

**Front-End Technologies:** HTML, CSS, JavaScript

**Back-End Technologiesr:** Node.js, Express.js

**Databases:** MongoDB

**ODM Library:** Mongoose


## Challenges Faced:

- **Cross-Origin Resource Sharing (CORS):** Managing CORS policies to allow frontend and backend to communicate securely.

- **Data Validation:** Ensuring that user inputs are validated both on the client-side and server-side to prevent malicious inputs.
- **Database Connectivity:** Setting up Mongoose to connect with the server and MongoDB for efficient database storage and retrieval.
- **Schema Implementation:** Defining and implementing Mongoose schemas for data validation and structure. Properly configuring and linking schemas to the MongoDB database.

## About server :

In this project, there are two servers: one for the front-end and one for the back-end. The front-end server, accessible at 
(http://localhost:3000/) , displays the home page and (it is simple 
page only I show you enter your details is correct on Sign In page 
then show you Home page). The back-end server, accessible at 
(http://localhost:5000/) , this server work on Back-end part
handles the logic for sign-in and sign-up processes.
Then (http://localhost:3000/login) , this local host for database of 
Sign In/Sign Up page . Your data like create a account or Sign In 
(In fig- 1) 
When a user signs up, their data is sent to the MongoDB compass 
database, which stores their username, email, and password. (In 
fig- 2)
When a user signs in, the back-end server verifies their 
credentials and, if successful, redirects them to the home page.

**Front-end Display :-**

![Screenshot 2024-03-06 154317](https://github.com/najam0121/Secure-login-page/assets/158159207/9970c19e-f8da-423d-a439-2187547584e5)


**Database display (store in Mongodb compass ) :-**

![Screenshot 2024-03-06 154345](https://github.com/najam0121/Secure-login-page/assets/158159207/4f347fc0-3dec-481a-af5f-9d1dad2fcc78)

