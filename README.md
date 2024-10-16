# Django + React LMS Project

A basic Learning Management System (LMS) prototype built as a learning project. Demonstrates Django REST Framework and React integration with JWT authentication and minimal UI components.

## Project Structure

The project is divided into two main folders:

- `client/`: Contains the React frontend application
  - Built with Vite for fast development
  - Styled using Tailwind CSS
- `server/`: Houses the Django REST Framework backend
  - Implements JWT authentication
  - Provides API endpoints for the LMS functionality

## Prerequisites

Before you begin, ensure you have the following installed:
- Python 3.8+
- Node.js 14+
- npm or yarn

## Getting Started

### Cloning the Repository

```bash
git clone https://github.com/priyanshum003/django-react-lms/
cd django-react-lms
```

### Setting up the Backend

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. Install the required packages:
   ```bash
   pip install -r requirements.txt
   ```

4. Set up your environment variables (create a `.env` file based on `.env.example`)

5. Run migrations:
   ```bash
   python manage.py migrate
   ```

6. Start the Django development server:
   ```bash
   python manage.py runserver
   ```

### Setting up the Frontend

1. Open a new terminal and navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Usage

After setting up both the backend and frontend, you can access the application by opening your browser and navigating to `http://localhost:5173` (or the port specified by Vite).

[Add any specific instructions on how to use your application]

## Learning Outcomes

This project was created as a learning exercise to gain hands-on experience with:

- Building RESTful APIs with Django REST Framework
- Implementing JWT authentication in a Django backend
- Creating a modern frontend with React, Vite, and Tailwind CSS
- Integrating a React frontend with a Django backend
