# Tichdoc Engineering Online Course Platform

## Overview

The Tichdoc Engineering Online Course Platform is a web application designed to provide high-quality online education for students pursuing engineering courses. The platform allows users to browse available courses, view detailed course content, watch instructional videos, take quizzes, and manage their accounts through login and registration functionalities.

## Features

- **Course Listing**: Browse through a list of available courses.
- **Course Details**: View detailed information about each course, including a course overview, objectives, content, and a video.
- **Quizzes**: Take quizzes to test your understanding of the course material.
- **Authentication**: Login and register functionalities to manage user accounts.
- **Responsive Design**: The application is responsive and works on various devices and screen sizes.

## Technologies Used

- **HTML**: For the structure of the web pages.
- **CSS**: For styling and layout.
- **JavaScript**: For dynamic content and interaction handling.
- **Local Storage**: For storing user information (username and password).

## Folder Structure

root
├── index.html
├── styles.css
└── script.js

## File Descriptions

### `index.html`

The main HTML file containing the structure of the web application. It includes sections for home, courses, about, contact, login, register, and course details. Navigation links are provided to switch between these sections.

### `styles.css`

The CSS file containing styles to make the layout responsive and visually appealing. Media queries ensure the layout adapts to different screen sizes.

### `script.js`

The JavaScript file containing all the dynamic functionalities of the application:

- **Initialization**: The script waits for the DOM to be fully loaded before executing.
- **Course Data**: An array of courses is defined, each with an ID, title, description, video ID, and quiz.
- **Selectors**: Selects elements from the DOM for manipulation.
- **Authentication**: Functions to handle login, logout, and authentication checks.
- **Course Display**: Dynamically generates course elements and appends them to the course list container.
- **Navigation**: Functions to handle navigation between sections.
- **Course Details**: Displays detailed information about a selected course, including a video placeholder and quiz.
- **Quiz Handling**: Functions to check the answer to the quiz and display feedback.

## Usage

1. **Navigate to the Home page**: Start from the home page to get an overview of the platform.
2. **Browse Courses**: Go to the courses section to see the available courses.
3. **View Course Details**: Click on a course to view its details, including the video and quiz.
4. **Take Quizzes**: Attempt the quiz to test your understanding of the course material.
5. **Authentication**: Use the login and register functionalities to create an account or log in.

## Contact

If you have any questions or feedback, please contact us at [info@tichdoc.com](mailto:info@tichdoc.com).

---

&copy; 2024 TichMashava. All rights reserved.

