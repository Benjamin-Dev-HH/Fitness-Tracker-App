## Backend Integration

1. Set up API endpoints in Django.
2. Use `axios` in React components to fetch data from the backend.
3. Example:

   ```typescript
   import axios from "axios";
   import { useEffect } from "react";

   useEffect(() => {
     axios
       .get("/api/endpoint")
       .then((response) => {
         // handle response
       })
       .catch((error) => {
         // handle error
       });
   }, []);
   ```

## Google OAuth2 Login

1. Configure Google OAuth2 in Django backend.
2. Use Google API in React frontend.
3. Example:

   ```typescript
   import { GoogleLogin } from "@react-oauth/google";

   const responseGoogle = (response: any) => {
     console.log(response);
   };

   <GoogleLogin
     clientId="YOUR_CLIENT_ID"
     onSuccess={responseGoogle}
     onError={responseGoogle}
   />;
   ```

## Testing

1. Create an admin user in Django:

   ```sh
   python manage.py createsuperuser
   ```

2. Create test users in Django admin panel.

3. Run the frontend and backend servers and test the application.

## Testing Backend Connection

1. Start the backend server:

   ```sh
   python manage.py runserver
   ```

2. Start the frontend development server:

   ```sh
   npm run dev
   ```

3. Open the app in your browser at `http://localhost:3000`. You should see the message "API is working!" fetched from the backend.
