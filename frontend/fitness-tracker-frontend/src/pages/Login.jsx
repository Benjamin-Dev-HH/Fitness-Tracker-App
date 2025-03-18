import React from 'react';
import { GoogleLogin } from 'react-google-login';

const Login = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl">Login</h1>
      <GoogleLogin
        clientId="YOUR_CLIENT_ID"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        className="bg-blue-500 text-white p-2 rounded"
      />
    </div>
  );
};

export default Login;
