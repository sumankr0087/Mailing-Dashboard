# Mailing Dashboard

A modern mailing dashboard application built with React, Shadcn, Tailwind CSS, and Node.js. This application includes authentication (sign-up/sign-in) and a mailing dashboard with features like folder navigation, email list view, and email detail view.

# Features

## 1. Authentication:

* User sign-up and sign-in.

* JWT-based authentication.

## 2. Mailing Dashboard:

* Sidebar navigation with folders (Inbox, Sent, Drafts, Trash, etc.).

* Email list view with subject, sender, and timestamp.

* Email detail view to display the full content of an email.

## 3. Responsive Design:

* Works on different screen sizes.

# Technology Stack
## 1. Frontend:

* React

* Shadcn (UI Component Library)

* Tailwind CSS (Styling)

* Axios (HTTP Requests)

* React Router (Routing)

## 2. Backend:

* Node.js

* Express (Web Framework)

* JSON Web Tokens (JWT) (Authentication)

* CORS (Cross-Origin Resource Sharing)

# Installation
## Backend Installation
1. Clone the repository:
```
git clone https://github.com/your-username/mailing-dashboard.git
cd mailing-dashboard/backend
```

2. Install dependencies:
```
npm install
```

3. Create a .env file in the backend directory and add the following environment variables:
```
PORT=5000
JWT_SECRET=your_jwt_secret_key
```

4. Start the backend server:
```
npm run dev
```

The backend will run on http://localhost:5000.


## Frontend Installation

1. Navigate to the frontend directory:

```
cd ../frontend
```
2. Install dependencies: 

```
npm install
```

3 Start the frontend development server:
```
npm run dev
```
The frontend will run on http://localhost:5173.