## Backend Integration

1. Set up API endpoints in Django.
2. Use `axios` in React components to fetch data from the backend.
3. Example:

   ```jsx
   import axios from "axios";

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

   ```jsx
   import { GoogleLogin } from "react-google-login";

   const responseGoogle = (response) => {
     console.log(response);
   };

   <GoogleLogin
     clientId="YOUR_CLIENT_ID"
     buttonText="Login with Google"
     onSuccess={responseGoogle}
     onFailure={responseGoogle}
     cookiePolicy={"single_host_origin"}
   />;
   ```

## Testing

1. Create an admin user in Django:

   ```sh
   python manage.py createsuperuser
   ```

2. Create test users in Django admin panel.

3. Run the frontend and backend servers and test the application.
