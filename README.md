# React Project + Spring Boot + PostgreSQL
## Project Description:
This Full-Stack Project which I called MyPlaces with React, Spring Boot and PostgreSQL is a web application that combines frontend built with React and backend using Spring Boot and PostgreSQL. Тhe purpose of this application is to create a list of places you want to visit or have already visited. Each place includes a title, the place itself, the country in which it is located, a link with a picture of the place and a short description. The application also allows you to correct information about a place or delete a place as well.

## Features:
1. Responsive Design: The application is fully responsive, ensuring an optimal viewing experience across a wide range of devices, from desktops to mobile phones.
2. Full-Stack Architecture: Combines a React frontend with an Spring Boot backend and PostgreSQL database.
3. Places List: Displays a list of places, each with a title, description and the place itself.
4. Place Details View: Provides a detailed view of each place with additional information.

## Technologies Used:
1. Frontend: React.js, JSX, CSS.
2. Backend: Java, Spring Boot.
3. Database: PostgreSQL, Spring Data JPA.
4. State Management: React Hooks.
5. Routing: React Router.
6. Version Control: Git, GitHub.

## Project Structure:
Frontend: Contains all React components and frontend logic.
 1. Components: Components(some of them reusable) for different sections of the project, including Menu.
 2. Pages: Separate pages for Home, Places and Add Place.

Backend: Contains all Spring Boot server-side code and database logic.
 1. Controllers: Handle the HTTP requests and responses.
 2. Services: Contain the business logic of the application.
 3. Repositories: Interface with the PostgreSQL database using Spring Data JPA.
 4. Models: Define the entity classes mapped to the database tables.
 5. Config: Configuration files, including database connection settings.

## To run this project locally, follow these steps: 
1. Clone the repository: git clone https://github.com/yourusername/react-portfolio 
2. Open the project with your code editor(IntelliJ IDEA) and open New Terminal
3. To install frontend dependencies, at the Terminal navigate to "cd src/main/frontend" and run: npm install
4. Ensure PostgreSQL is installed and running
5. Create a database and update file "application.properties" with your database credentials
6. Start the Spring Boot application 
7. Start the frontend development server: npm start
8. Open the application in your browser: http://localhost:3000 
