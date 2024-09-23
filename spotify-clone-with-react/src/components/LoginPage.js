import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './LoginPage.css'; // Make sure you style it

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login to Your Account</h2>
        <button className="login-btn" onClick={() => loginWithRedirect()}>
          Log In
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
