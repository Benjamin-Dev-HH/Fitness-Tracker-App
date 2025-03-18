import React from "react";
import { GoogleLogin } from "react-google-login";

const Login = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="heading">Login</h1>
      <GoogleLogin
        clientId="YOUR_CLIENT_ID" // Replace with your actual Google OAuth2 client ID
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        className="btn-primary"
      />
    </div>
  );
};

export default Login;
