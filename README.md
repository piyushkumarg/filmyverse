
# Filmyverse

Filmyverse is a movie-related application built using React with a backend powered by Firebase. It includes features for user authentication, movie reviews, and comments, providing a seamless user experience.


## Backend - Firebase Integration

The backend functionality of Filmyverse is powered by Firebase, offering:

### Authentication

- **Firebase Authentication**: Users can log in securely using Firebase's authentication system.
- **Secure Access**: Only authenticated users can access and interact with the review and comment sections.

### Real-time Database

- **Movie Reviews Storage**: Firebase Realtime Database stores movie reviews and associated data.
- **Comments Storage**: Stores user comments associated with specific reviews.



## Installation

To run this project locally, ensure you have [Node.js](https://nodejs.org/) installed:

1. Clone this repository.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install dependencies.
4. Set up Firebase by adding your Firebase configuration details.
5. Use `npm start` to start the development server.

## Firebase Configuration

To integrate Firebase into this project:

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Obtain Firebase configuration details (apiKey, authDomain, projectId, etc.).
3. Add these configuration details to the project's Firebase setup.

## Technologies Used

- [React](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)
- [Material-UI](https://mui.com/)
- [React Router](https://reactrouter.com/)
- [SweetAlert](https://sweetalert.js.org/)


## Usage

1. **Login**: Use Firebase Authentication to log in and authenticate.
2. **View Reviews**: Access the movie review section to explore existing reviews and ratings.
3. **Add Comments**: Authenticated users can participate in discussions by adding comments to reviews.

## Firebase Services Used

- **Authentication**: Firebase Authentication
- **Database**: Firebase Realtime Database
- **Hosting**: Firebase Hosting (for deployment)

## Scripts

- `npm start`: Start the development server.
- `npm build`: Build the project for production.
