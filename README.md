# Estatein

Estatein is a modern real estate platform built with React, TypeScript, and Node.js. It features property browsing, user authentication, and a protected user management area.

## Features

-   **Property Browsing**: View a list of available properties with details.
-   **User Authentication**: Secure Login and Sign Up functionality using JWT and bcrypt.
-   **Protected Routes**: Access control for the Users list page.
-   **Responsive Design**: Built with Tailwind CSS for a seamless experience across devices.

## Tech Stack

-   **Frontend**: React, TypeScript, Vite, Tailwind CSS, React Router DOM
-   **Backend**: Node.js, Express, PostgreSQL
-   **Database**: PostgreSQL
-   **Authentication**: JSON Web Tokens (JWT), bcryptjs

## Getting Started

### Prerequisites

-   Node.js (v14+ recommended)
-   PostgreSQL installed and running
-   Create a database (e.g., `estatein_db`)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd estatein
    ```

2.  **Install Frontend Dependencies:**
    ```bash
    npm install
    ```

3.  **Install Backend Dependencies:**
    ```bash
    cd backend
    npm install
    ```

### Configuration

1.  **Backend Environment Variables:**
    Create a `.env` file in the `backend` directory:
    ```env
    PORT=5000
    DATABASE_URL=postgresql://username:password@localhost:5432/estatein_db
    JWT_SECRET=your_jwt_secret_key
    ```
    *Replace `username`, `password`, and `estatein_db` with your PostgreSQL credentials.*

2.  **Database Setup:**
    Run the setup script to create tables and seed data:
    ```bash
    cd backend
    node setupDb.js
    ```

### Running the Application

From the root directory, run:

```bash
npm start
```

This command uses `concurrently` to start both the Frontend (Vite) and Backend (Express) servers simultaneously.

-   **Frontend**: http://localhost:5173
-   **Backend**: http://localhost:5000
-   **Swagger API Docs**: http://localhost:5000/api-docs

## Project Structure

-   `src/`: Frontend React source code.
    -   `components/`: Reusable UI components and sections.
    -   `pages/`: Application pages (Home, Login, Signup, Users).
    -   `services/`: API integration services.
-   `backend/`: Node.js/Express backend.
    -   `server.js`: Main server file.
    -   `setupDb.js`: Database initialization script.
