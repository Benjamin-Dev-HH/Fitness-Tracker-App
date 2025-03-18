# Fitness Tracker App

Fitness Tracking | Desktop | Mobile

A Fitness Tracking App that will be designed to work best with Google and API´s/Cloud for personal use.

Python , Django , React, Typescript, Tailwind CSS (ggf. Material UI), React Router, ggf Redux

OAuth2

Google Fit / Strava API (Fitbit optional)

User-Profil, Workout Tracking & Ernährungstagebuch als Kern Features

Hosting: Frontend auf Vercel, Backend auf Railway

## Frontend Setup

1. Navigate to the `frontend` directory:

   ```sh
   cd c:\Users\ben11\Documents\GitHub\Fitness-Tracker-App\frontend
   ```

2. Initialize a new Vite project:

   ```sh
   npm create vite@latest
   cd fitness-tracker-frontend
   npm install
   ```

3. Install necessary dependencies:

   ```sh
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   npm install react-router-dom axios
   ```

4. Set up Tailwind CSS:
   Update `tailwind.config.js`:

   ```javascript
   module.exports = {
     content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
     theme: {
       extend: {
         colors: {
           "marine-blue": "#1E3A8A",
         },
       },
     },
     plugins: [],
   };
   ```

5. Create the project structure and components as described above.

6. To run the frontend:
   ```sh
   npm run dev
   ```

## Backend Integration

1. Set up API endpoints in Django.
2. Use `axios` in React components to fetch data from the backend.

## Google OAuth2 Login

1. Configure Google OAuth2 in Django backend.
2. Use Google API in React frontend.

## Testing

1. Create an admin user in Django:

   ```sh
   python manage.py createsuperuser
   ```

2. Create test users in Django admin panel.

3. Run the frontend and backend servers and test the application.

## Docker Setup

1. Build and start the services:

   ```sh
   docker-compose up --build
   ```

2. Access the services:

   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend: [http://localhost:8000](http://localhost:8000)
   - MySQL: `localhost:3306`

3. To stop the services:

   ```sh
   docker-compose down
   ```

4. To clean up volumes:
   ```sh
   docker-compose down -v
   ```
