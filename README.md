# React + TypeScript + Vite 

This project is a simple web application built with React that includes Sign Up and Login forms. The application uses Formik for form handling, local storage for managing form state persistence, and React Router for navigation between the login and sign-up pages.

# How to Run

1. Clone the repository:
```
git clone <repository-url>
```

2. Navigate to the project directory:
```
cd <project-directory>
```

3. Install dependencies:
```
npm install
```

4. Start the development server:
```
npm run dev
```

# The design choices made
## 1. Form Handling with Formik
1. Formik was chosen for handling form submissions and validation due to its simplicity and integration with React. It allows handling form state, validation, and submission with minimal boilerplate code.
2. Validation is done using the validate prop in Formik fields. This approach provides real-time feedback to the user, allowing for quick corrections.
3. Password strength checking is handled in real-time based on the input length, providing users with instant feedback on the strength of their password.

## 2. Password Strength Indicator
1. Password strength is displayed using a simple indicator (Weak, Moderate, Strong). This feedback helps users understand the security level of their password input.
2. The strength calculation is based on password length, ensuring users create strong passwords (at least 6 characters for Weak, 10 characters for Strong).

## 3. Local Storage for Persistent State
1. useLocalStorage is utilized to store the user’s email if they select the "Remember Me" checkbox. This allows the user to maintain state across page reloads without requiring them to re-enter their email.
2. This design choice ensures convenience for users who frequently log in to the application from the same device.

## 4. React Router for Navigation
1. React Router is used to handle navigation between the login and sign-up pages. The BrowserRouter component wraps the app to provide the necessary routing context.
2. Routes are defined using Route components with path and component attributes. A Switch is used to ensure only one route is rendered at a time.
3. The application starts with the Login page, and users can navigate to the Sign Up page via a link.

# Assumptions and Limitations
1. Email and Password: It is assumed that users will have valid email and password inputs.
2. Remember Me Functionality: The "Remember Me" feature is assumed to be used on devices where users do not share their browser with others, given the sensitive nature of email storage in local storage.
3. Client-side Validation: Client-side validation is handled for real-time feedback. However, server-side validation should be implemented for security purposes.
4. No Password Recovery: The application does not include a password recovery feature, which is essential for users who forget their password.
5. No Mobile Responsiveness: The current design does not cater to mobile responsiveness, limiting usability on smaller screens.
